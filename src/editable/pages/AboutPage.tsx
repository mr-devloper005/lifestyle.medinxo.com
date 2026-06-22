import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="soft-grid bg-[var(--slot4-page-bg)] text-[#171829]">
        <section className="px-4 py-8 sm:px-6 lg:py-12">
          <div className="mx-auto grid max-w-[1120px] overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#2600d4,#3b00f5_58%,#2100a8)] text-white shadow-[0_22px_60px_rgba(48,0,190,.22)] lg:grid-cols-[1.15fr_.85fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#ffd45a]">{pagesContent.about.badge}</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                {pagesContent.about.title}
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72 sm:text-base">{pagesContent.about.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/search" className="rounded-xl bg-[#ff5a5a] px-5 py-3 text-xs font-black uppercase tracking-[.1em] text-white shadow-[0_10px_25px_rgba(255,90,90,.3)] transition hover:-translate-y-0.5">Explore archive</Link>
                <Link href="/contact" className="rounded-xl border border-white/30 px-5 py-3 text-xs font-black uppercase tracking-[.1em] text-white transition hover:bg-white hover:text-[#2600d4]">Contact</Link>
              </div>
            </div>
            <div className="relative hidden min-h-[300px] border-l border-white/15 p-8 lg:block">
              <div className="float-card absolute left-8 top-10 w-56 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-white/55">Media map</p>
                <div className="mt-4 grid gap-2">
                  {['Articles', 'Visuals', 'Listings', 'Resources'].map((item) => <span key={item} className="rounded-full bg-white/12 px-3 py-2 text-xs font-bold">✓ {item}</span>)}
                </div>
              </div>
              <div className="absolute bottom-8 right-8 w-64 rounded-2xl bg-white p-5 text-[#171829] shadow-2xl">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#ff5a5a]">At a glance</p>
                <p className="mt-3 text-2xl font-black leading-tight tracking-[-.04em]">Smaller sections. Faster scanning. Clearer paths.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-6 lg:pb-14">
          <div className="mx-auto grid max-w-[1120px] gap-5 lg:grid-cols-[.95fr_1.05fr]">
            <article className="rounded-[1.5rem] bg-white p-6 shadow-[0_16px_45px_rgba(35,36,55,.07)] ring-1 ring-[#ebeaff] sm:p-8">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ff5a5a]">About {SITE_CONFIG.name}</p>
              <h2 className="mt-3 text-2xl font-black leading-tight tracking-[-.04em] sm:text-3xl">A compact hub for browsing connected media.</h2>
              <div className="mt-5 space-y-4 text-sm leading-7 text-[#5f6378]">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {pagesContent.about.values.map((value, index) => (
                <div key={value.title} className="rounded-[1.35rem] bg-white p-5 shadow-[0_14px_38px_rgba(35,36,55,.06)] ring-1 ring-[#ebeaff] transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(48,0,190,.13)]">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#fff0ec] text-xs font-black text-[#ff5a5a]">0{index + 1}</span>
                  <h3 className="mt-4 text-lg font-black leading-tight tracking-[-.03em]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#66677a]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-14 sm:px-6">
          <div className="mx-auto flex max-w-[1120px] flex-col gap-4 rounded-[1.5rem] bg-white p-6 shadow-[0_16px_45px_rgba(35,36,55,.07)] ring-1 ring-[#ebeaff] sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ff5a5a]">Next step</p>
              <h2 className="mt-2 text-2xl font-black leading-tight tracking-[-.04em]">Find the latest public updates.</h2>
            </div>
            <Link href="/search" className="inline-flex w-fit rounded-xl bg-[#3b00f5] px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#ff5a5a]">Explore archive</Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
