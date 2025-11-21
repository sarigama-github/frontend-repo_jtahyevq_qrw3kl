import { useState } from 'react'

const initial = { name: '', phone: '', car_model: '', budget: '', message: '', email: '' }

function LeadForm() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle' })

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading' })
    try {
      const res = await fetch(`${baseUrl}/api/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Ошибка отправки')
      setStatus({ state: 'success' })
      setForm(initial)
    } catch (err) {
      setStatus({ state: 'error', message: err.message })
    }
  }

  return (
    <section id="lead" className="relative py-14 bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(900px_400px_at_10%_100%,rgba(253,186,116,0.25),transparent_60%),radial-gradient(900px_400px_at_90%_0%,rgba(244,114,182,0.2),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Заявка на подбор авто</h2>
          <p className="mt-2 text-slate-700">Заполните форму — ответим в течение 15 минут</p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl border border-rose-200/60 shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Имя</label>
                  <input name="name" value={form.name} onChange={onChange} required placeholder="Иван" className="w-full rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-400/60 focus:outline-none px-4 py-3 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Телефон или Telegram</label>
                  <input name="phone" value={form.phone} onChange={onChange} required placeholder="+7 999 000-00-00 / @username" className="w-full rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-400/60 focus:outline-none px-4 py-3 bg-white" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Модель авто</label>
                    <input name="car_model" value={form.car_model} onChange={onChange} placeholder="BMW 3, Audi A4..." className="w-full rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-400/60 focus:outline-none px-4 py-3 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Бюджет</label>
                    <input name="budget" value={form.budget} onChange={onChange} placeholder="например, до 2.5 млн" className="w-full rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-400/60 focus:outline-none px-4 py-3 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email (необязательно)</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="email@example.com" className="w-full rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-400/60 focus:outline-none px-4 py-3 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Комментарий</label>
                  <textarea name="message" value={form.message} onChange={onChange} rows="4" placeholder="Пожелания по комплектации, пробегу, цвету..." className="w-full rounded-xl border border-rose-200 focus:ring-2 focus:ring-rose-400/60 focus:outline-none px-4 py-3 bg-white" />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button type="submit" disabled={status.state==='loading'} className="group relative inline-flex justify-center items-center gap-3 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white px-6 py-3 font-semibold shadow-lg shadow-rose-500/25 transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]">
                    <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {status.state==='loading' ? 'Отправка...' : 'Отправить заявку'}
                  </button>
                  <a href="https://t.me/" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-rose-600 border border-rose-200 hover:shadow">
                    Написать в Telegram
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                </div>

                {status.state==='success' && (
                  <p className="text-emerald-600 font-medium">Спасибо! Ваша заявка отправлена. Мы свяжемся с вами.</p>
                )}
                {status.state==='error' && (
                  <p className="text-rose-600 font-medium">Ошибка: {status.message}</p>
                )}
              </form>
            </div>

            <div className="relative p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_10%,#fb7185,transparent_30%),radial-gradient(circle_at_90%_80%,#f59e0b,transparent_30%)]" />
              <div className="relative space-y-5">
                <h3 className="text-2xl font-bold">Что входит в услугу</h3>
                <ul className="space-y-3 text-slate-200/90">
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-rose-400"/>Подбор и проверка по базам</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-amber-400"/>Торг с продавцом и предвыкупная диагностика</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-rose-400"/>Доставка, растаможка и постановка на учёт</li>
                  <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-amber-400"/>Гарантия прозрачности и фиксированных затрат</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadForm
