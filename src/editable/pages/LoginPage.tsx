import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="soft-grid bg-[var(--slot4-page-bg)] px-4 py-10 text-[#171829] sm:px-6 lg:py-14">
        <section className="mx-auto grid max-w-[1060px] overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_60px_rgba(35,36,55,.1)] ring-1 ring-[#ebeaff] lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative flex min-h-[360px] flex-col justify-center overflow-hidden bg-[linear-gradient(135deg,#2600d4,#3b00f5_58%,#2100a8)] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-[#ffd45a]/20 blur-2xl" />
            <div className="absolute bottom-[-4rem] left-[-2rem] h-52 w-52 rounded-full bg-[#ff5a5a]/25 blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ffd45a]">{pagesContent.auth.login.badge}</p>
              <h1 className="mt-4 max-w-xl text-4xl font-black leading-[0.96] tracking-[-0.055em] sm:text-5xl">{pagesContent.auth.login.title}</h1>
              <p className="mt-5 max-w-lg text-sm font-semibold leading-7 text-white/75">{pagesContent.auth.login.description}</p>
              <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-[10px] font-black uppercase tracking-[.2em] text-white/55">Member workspace</p>
                <p className="mt-2 text-sm leading-6 text-white/78">Continue managing submissions and browsing the publication surface.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ff5a5a]">Member access</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 border-t border-[#ebeaff] pt-5 text-sm text-[#66677a]">New here? <Link href="/signup" className="font-black text-[#ff5a5a] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
