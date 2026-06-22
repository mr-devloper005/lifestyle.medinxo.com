'use client'

import { FileText, Mail, Megaphone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, newsroom collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="soft-grid bg-[var(--slot4-page-bg)] px-4 py-10 text-[#171829] sm:px-6 lg:py-14">
        <section className="mx-auto max-w-[1120px]">
          <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#2600d4,#3b00f5_58%,#2100a8)] p-7 text-white shadow-[0_22px_60px_rgba(48,0,190,.22)] sm:p-10 lg:p-12">
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#ffd45a]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-6xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl border-l-4 border-[#ff5a5a] pl-5 text-sm font-semibold leading-7 text-white/72">{pagesContent.contact.description}</p>
          </div>
        </section>

        <section className="mx-auto mt-5 grid max-w-[1120px] gap-5 lg:grid-cols-[0.74fr_1.26fr]">
          <aside className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {desks.map((desk, index) => (
              <div key={desk.title} className="rounded-[1.35rem] bg-white p-5 shadow-[0_14px_38px_rgba(35,36,55,.06)] ring-1 ring-[#ebeaff] transition hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(48,0,190,.13)]">
                <div className="flex items-center justify-between"><desk.icon className="h-5 w-5 text-[#ff5a5a]" /><span className="text-xs font-black text-[#3b00f5]/35">0{index + 1}</span></div>
                <h2 className="mt-5 text-lg font-black leading-tight tracking-[-.03em]">{desk.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#66677a]">{desk.body}</p>
              </div>
            ))}
          </aside>
          <div className="rounded-[1.5rem] bg-white p-6 shadow-[0_16px_45px_rgba(35,36,55,.07)] ring-1 ring-[#ebeaff] sm:p-8 lg:p-10">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#ff5a5a]">Send a message</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] sm:text-4xl">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
