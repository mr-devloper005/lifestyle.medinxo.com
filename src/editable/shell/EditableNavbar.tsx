'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e9f2] bg-white/95 text-[#25263a] shadow-[0_12px_35px_rgba(33,24,92,.07)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[82px] max-w-[1320px] items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center lg:hidden">
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center border border-black/25 lg:hidden" aria-label="Toggle navigation">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link href="/" className="editorial-brand flex shrink-0 items-center gap-2 text-xl font-black text-[#3100d8]">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#3b00f5] text-sm text-white shadow-[4px_4px_0_#ff5a5a]">LM</span><span className="hidden sm:block">{SITE_CONFIG.name}</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-5 lg:flex">
          <Link href="/search" className="rounded-xl px-3 py-2 text-xs font-black uppercase tracking-[.12em] text-[#3b00f5] transition hover:bg-[#f4f3ff] hover:text-[#ff5a5a]">Search</Link>
          <Link href="/about" className="rounded-xl px-3 py-2 text-xs font-black uppercase tracking-[.12em] text-[#3b00f5] transition hover:bg-[#f4f3ff] hover:text-[#ff5a5a]">About</Link>
          <Link href="/contact" className="rounded-xl px-3 py-2 text-xs font-black uppercase tracking-[.12em] text-[#3b00f5] transition hover:bg-[#f4f3ff] hover:text-[#ff5a5a]">Contact</Link>
        </nav>
        <div className="ml-auto flex items-center justify-end gap-4">
          {session ? (
            <button type="button" onClick={logout} className="hidden text-xs font-black uppercase tracking-[.12em] sm:block">Logout</button>
          ) : <Link href="/login" className="hidden rounded-xl px-3 py-2 text-xs font-black uppercase tracking-[.12em] text-[#ff5a5a] transition hover:bg-[#fff0ec] sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-xl bg-[#ff5a5a] px-4 py-3 text-xs font-black uppercase tracking-[.08em] text-white shadow-[0_8px_22px_rgba(255,90,90,.3)] transition hover:-translate-y-0.5 sm:px-6">
            {session ? 'Publish release' : 'Subscribe'}
          </Link>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#ececf5] bg-white px-4 py-4 lg:hidden">
          <form action="/search" className="mb-3 flex rounded-xl bg-[#f4f3ff]"><Search className="ml-4 mt-3.5 h-4 w-4"/><input name="q" placeholder="Search media" className="min-w-0 flex-1 bg-transparent p-3 outline-none"/></form>
          <div className="grid gap-2">
            <Link href="/search" onClick={() => setOpen(false)} className="rounded-xl bg-[#3b00f5] px-4 py-3 text-sm font-black uppercase tracking-[.12em] text-white">Search</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="rounded-xl bg-[#3b00f5] px-4 py-3 text-sm font-black uppercase tracking-[.12em] text-white">About</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="rounded-xl bg-[#3b00f5] px-4 py-3 text-sm font-black uppercase tracking-[.12em] text-white">Contact</Link>
            {session ? (
              <>
                <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-xl bg-[#3b00f5] px-4 py-3 text-left text-sm font-black uppercase tracking-[.12em] text-white">Logout</button>
                <Link href="/create" onClick={() => setOpen(false)} className="rounded-xl bg-[#ff5a5a] px-4 py-3 text-sm font-black uppercase tracking-[.12em] text-white">Publish release</Link>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setOpen(false)} className="rounded-xl bg-[#3b00f5] px-4 py-3 text-sm font-black uppercase tracking-[.12em] text-[#ff5a5a]">Log in</Link>
                <Link href="/signup" onClick={() => setOpen(false)} className="rounded-xl bg-[#3b00f5] px-4 py-3 text-sm font-black uppercase tracking-[.12em] text-white">Subscribe</Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
