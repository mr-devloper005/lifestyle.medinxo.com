import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { CompactIndexCard, getEditableExcerpt, getEditablePostImage, postHref, RailPostCard } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

export function EditableHomeHero({ primaryRoute, posts }: HomeSectionProps) {
  const lead = posts[0]
  return (
    <section className="distribution-glow overflow-hidden text-white">
      <div className="mx-auto grid min-h-[650px] max-w-[1320px] items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8 lg:py-24">
        <div>
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur">Media distribution, organized</span>
          <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[.92] tracking-[-.065em] sm:text-7xl">Your media. Everywhere it needs to be.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 sm:text-lg">Discover announcements, releases, brand stories, and public updates through one playful, searchable directory.</p>
          <form action="/search" className="mt-8 flex max-w-xl rounded-xl bg-white p-1.5 shadow-2xl">
            <Search className="ml-3 mt-3 h-5 w-5 text-[#66677a]"/><input name="q" placeholder="Search releases, companies or topics" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#222] outline-none"/><button className="rounded-lg bg-[#ff5a5a] px-5 py-3 text-sm font-black text-white">Search</button>
          </form>
          <div className="mt-7 flex flex-wrap gap-3"><Link href={primaryRoute} className="rounded-xl bg-[#ff5a5a] px-6 py-3.5 text-sm font-black shadow-lg transition hover:-translate-y-1">Browse releases</Link><Link href="/contact" className="rounded-xl border border-white/35 px-6 py-3.5 text-sm font-bold hover:bg-white/10">Distribute media</Link></div>
        </div>
        <div className="relative hidden min-h-[470px] lg:block">
          <div className="absolute left-4 top-16 h-[370px] w-[270px] rotate-[-3deg] overflow-hidden rounded-2xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur">
            {lead ? <img src={getEditablePostImage(lead)} alt={lead.title} className="h-[230px] w-full object-cover"/> : <div className="h-[230px] bg-white/10"/>}<div className="p-5"><p className="text-[10px] font-black uppercase tracking-[.2em] text-[#ffd45a]">Featured release</p><h2 className="mt-3 line-clamp-3 text-xl font-black leading-tight">{lead?.title || 'Fresh stories arrive here'}</h2></div>
          </div>
          <div className="float-card absolute right-0 top-4 w-[330px] rounded-2xl border border-white/25 bg-white/10 p-5 shadow-2xl backdrop-blur"><p className="text-xs font-bold text-white/60">Distribution overview</p><div className="mt-4 grid grid-cols-2 gap-2">{['Press releases','Brand mentions','News media','Public updates'].map(x=><span key={x} className="rounded-full bg-white/10 px-3 py-2 text-xs">✓ {x}</span>)}</div></div>
          <div className="absolute bottom-4 right-2 w-[350px] rounded-2xl border border-white/25 bg-white/10 p-5 shadow-2xl backdrop-blur"><div className="flex justify-between text-xs"><span>Media reach</span><b className="text-[#ffd45a]">+24.8%</b></div><div className="mt-7 flex h-24 items-end gap-2">{[42,68,50,82,58,92,76,100].map((h,i)=><i key={i} className="flex-1 rounded-t bg-[linear-gradient(#ff8b5a,#ffd45a)]" style={{height:`${h}%`}}/>)}</div></div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(5, 13).length ? posts.slice(5, 13) : posts
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">Fresh placements</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.055em] text-[#232437]">Latest media drops</h2>
          </div>
          <Link href={primaryRoute} className="hidden rounded-full border border-[#e8e7ff] bg-white px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-[#3b00f5] shadow-sm hover:border-[#ff5a5a] hover:text-[#ff5a5a] sm:inline-flex">View all <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>
        <div className={`${dc.layout.rail} mt-6`}>
          {railPosts.map((post, index) => <RailPostCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const feature = posts[8] || posts[0]
  const portraits = posts.slice(9, 14).length ? posts.slice(9, 14) : posts.slice(1, 6)
  if (!feature) return null
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff,#f3f1ff)] text-[#232437]">
      <div className={`${dc.shell.section} py-14 sm:py-20`}>
        <div className="flex items-end justify-between pb-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.24em] text-[var(--slot4-accent)]">Featured directory</p>
            <h2 className="mt-2 text-4xl font-black tracking-[-.055em] sm:text-5xl">Campaign-ready reads</h2>
          </div>
          <span className="hidden rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[.14em] text-[#3b00f5] shadow-sm sm:block">Stories worth your time</span>
        </div>
        <div className="mt-7 grid gap-5 lg:grid-cols-[1.55fr_.72fr_.72fr_.72fr]">
          <Link href={postHref(primaryTask, feature, primaryRoute)} className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#2400c5] shadow-[0_25px_70px_rgba(49,0,216,.22)] lg:row-span-2">
            <img src={getEditablePostImage(feature)} alt={feature.title} className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(0,0,0,.88))]" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#ffd45a]">Cover feature</p>
              <h3 className="mt-3 text-4xl font-black leading-[.98] tracking-[-.055em]">{feature.title}</h3>
            </div>
          </Link>
          {portraits.slice(0, 5).map((post) => (
            <Link key={post.id} href={postHref(primaryTask, post, primaryRoute)} className="group overflow-hidden rounded-[1.5rem] bg-[#2400c5] text-white shadow-sm">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,.88))]" />
                <h3 className="absolute inset-x-0 bottom-0 p-4 text-lg font-black leading-tight tracking-[-.035em]">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const collected = timeSections.flatMap((section) => section.posts)
  const source = collected.length ? collected : posts.slice(3)
  const lead = source[0] || posts[0]
  const briefs = source.slice(1, 7)
  if (!lead) return null
  return (
    <section className="soft-grid bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <div className="pb-4">
              <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">From the directory</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-.055em] text-[#232437]">More to discover</h2>
            </div>
            <Link href={postHref(primaryTask, lead, primaryRoute)} className="group mt-6 grid overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_55px_rgba(35,36,55,.08)] ring-1 ring-[#ededff] sm:grid-cols-[1.1fr_.9fr]">
              <div className="relative min-h-[330px] overflow-hidden bg-[var(--slot4-media-bg)]">
                <img src={getEditablePostImage(lead)} alt={lead.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="bg-[#2600d4] p-7 text-white sm:p-9">
                <p className="text-[10px] font-black uppercase tracking-[.2em] text-[#ffd45a]">Editor&apos;s pick</p>
                <h3 className="mt-4 text-4xl font-black leading-[.98] tracking-[-.055em]">{lead.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/70">{getEditableExcerpt(lead, 180)}</p>
              </div>
            </Link>
          </div>
          <aside>
            <div className="pb-4">
              <p className="text-[10px] font-black uppercase tracking-[.23em] text-[var(--slot4-accent)]">Quick reads</p>
              <h2 className="mt-2 text-4xl font-black tracking-[-.055em] text-[#232437]">The briefing</h2>
            </div>
            <div className="mt-2 rounded-[1.5rem] bg-white p-3 shadow-[0_18px_55px_rgba(35,36,55,.08)] ring-1 ring-[#ededff]">
              {briefs.map((post, index) => <CompactIndexCard key={post.id} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </aside>
        </div>
        <form action="/search" className="mt-14 grid rounded-[2rem] bg-[#f4f2ff] p-6 shadow-sm ring-1 ring-[#e8e7ff] sm:grid-cols-[1fr_auto] sm:items-center sm:p-9">
          <div>
            <h3 className="text-3xl font-black tracking-[-.05em] text-[#232437]">Search the full archive</h3>
            <p className="mt-2 text-sm text-[#66677a]">Explore every {taskLabel(primaryTask).toLowerCase()} published by {SITE_CONFIG.name}.</p>
          </div>
          <label className="mt-5 flex rounded-xl bg-white p-1 shadow-sm sm:mt-0 sm:min-w-[420px]">
            <Search className="ml-4 mt-4 h-4 w-4 text-[#66677a]" />
            <input name="q" placeholder="Search stories" className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none" />
            <button className="rounded-lg bg-[var(--slot4-accent)] px-5 text-xs font-black uppercase tracking-[.14em] text-white">Search</button>
          </label>
        </form>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white px-4 py-16 text-white sm:px-6">
      <div className={`${dc.shell.section} grid overflow-hidden rounded-[2.2rem] bg-[linear-gradient(135deg,#2500b8,#3b00f5_60%,#2100a8)] shadow-[0_25px_70px_rgba(48,0,190,.2)] lg:grid-cols-2`}>
        <div className="px-6 py-14 sm:px-10 lg:py-20">
          <p className="text-[10px] font-black uppercase tracking-[.24em] text-[#ffd45a]">Stay informed</p>
          <h2 className="mt-4 max-w-xl text-5xl font-black leading-[.94] tracking-[-.06em]">The stories shaping what comes next.</h2>
        </div>
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:py-20">
          <p className="max-w-xl text-lg leading-8 text-white/65">Fresh releases, media updates, publisher perspectives, and useful public information in one focused publication.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-xl bg-[#ff5a5a] px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] text-white shadow-lg hover:-translate-y-0.5">Send a tip</Link>
            <Link href="/signup" className="rounded-xl border border-white/35 px-7 py-3.5 text-xs font-black uppercase tracking-[.12em] hover:bg-white hover:text-[#2500b8]">Join the readership</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
