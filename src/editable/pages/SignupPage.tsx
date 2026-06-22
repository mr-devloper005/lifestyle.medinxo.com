import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="soft-grid bg-[var(--slot4-page-bg)] px-4 py-10 text-[#171829] sm:px-6 lg:py-14">
        <section className="mx-auto grid max-w-[1060px] overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_60px_rgba(35,36,55,.1)] ring-1 ring-[#ebeaff] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ff5a5a]">Create account</p>
            <h1 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 border-t border-[#ebeaff] pt-5 text-sm text-[#66677a]">Already have an account? <Link href="/login" className="font-black text-[#ff5a5a] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="relative flex min-h-[360px] flex-col justify-center overflow-hidden bg-[linear-gradient(135deg,#2600d4,#3b00f5_58%,#2100a8)] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute right-[-3rem] top-[-3rem] h-40 w-40 rounded-full bg-[#ff5a5a]/30 blur-2xl" />
            <div className="absolute bottom-[-4rem] left-8 h-44 w-44 rounded-full bg-[#ffd45a]/20 blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ffd45a]">{pagesContent.auth.signup.badge}</p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.96] tracking-[-0.055em] sm:text-5xl">{pagesContent.auth.signup.title}</h2>
              <p className="mt-5 max-w-lg text-sm font-semibold leading-7 text-white/70">{pagesContent.auth.signup.description}</p>
              <div className="mt-7 grid max-w-md gap-2 text-xs font-bold text-white/75">
                <span className="rounded-full bg-white/10 px-4 py-2">✓ Save publishing details</span>
                <span className="rounded-full bg-white/10 px-4 py-2">✓ Submit public updates</span>
                <span className="rounded-full bg-white/10 px-4 py-2">✓ Browse connected media</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
