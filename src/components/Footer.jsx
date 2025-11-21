function Footer() {
  return (
    <footer className="bg-white/70 backdrop-blur border-t border-rose-200/60">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-700">
        <p className="text-sm">© 2025 Car Import Europe → Russia. Все права защищены.</p>
        <div className="flex items-center gap-3">
          <a href="https://t.me/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-rose-200 bg-white hover:shadow">
            Telegram канал
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#lead" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 text-white font-semibold shadow-md hover:shadow-lg">
            Заказать авто
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
