import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_10%_0%,rgba(253,186,116,0.35),transparent_60%),radial-gradient(1000px_500px_at_90%_20%,rgba(244,114,182,0.25),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-10 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-sm tracking-wider uppercase text-rose-600 font-semibold bg-white/60 backdrop-blur px-3 py-1 rounded-full border border-rose-200">
            Пригон авто из Европы
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Быстрый и честный подбор автомобиля под ключ
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Найдём идеальный автомобиль в Европе, проверим историю, организуем доставку и таможню. Полное сопровождение на каждом этапе.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white px-6 py-3 font-semibold shadow-lg shadow-rose-500/25 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.99]"
            >
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.91 12.08l-.23 3.62c.33 0 .48-.14.65-.3l1.56-1.49 3.24 2.38c.59.33 1 .16 1.17-.55l2.12-9.97.01-.01c.19-.9-.33-1.25-.9-1.03l-12.5 4.82c-.85.33-.84.82-.15 1.03l3.2.99 7.42-4.68c.35-.23.67-.1.41.14l-6 5.05z" fill="currentColor"/></svg>
              Перейти в Telegram
            </a>
            <a
              href="#lead"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-rose-600 px-6 py-3 font-semibold border border-rose-200 shadow-sm hover:shadow transition-all"
            >
              Оставить заявку
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>

        <div className="relative aspect-[16/12] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-amber-200/40 ring-1 ring-rose-200/60">
          <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-100/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
