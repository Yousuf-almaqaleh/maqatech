import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const mailtoLink = `mailto:yousuf.almaqaleh@gmail.com?subject=رسالة من ${form.name}&body=${encodeURIComponent(form.message + '\n\nمن: ' + form.name + '\nالبريد: ' + form.email)}`
    window.open(mailtoLink)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="section-wrap contact-section">
      <div className="section-header">
        <span className="section-tag">تواصل</span>
        <h2 className="section-title">تواصل معي</h2>
        <div className="section-line" />
        <p className="section-sub">هل لديك مشروع أو فكرة؟ لا تتردد في التواصل معي!</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info glass-card">
          <h3>معلومات التواصل</h3>
          {[
            { icon: '📞', label: 'الهاتف', val: '+967 712 127 541', href: 'tel:+967712127541' },
            { icon: '✉️', label: 'البريد الإلكتروني', val: 'yousuf.almaqaleh@gmail.com', href: 'mailto:yousuf.almaqaleh@gmail.com' },
            { icon: '📍', label: 'الموقع', val: 'اليمن', href: null },
          ].map((item, i) => (
            <a key={i} className="contact-item" href={item.href || '#'} style={{ textDecoration: 'none' }}>
              <div className="contact-item-icon">{item.icon}</div>
              <div>
                <span className="contact-item-label">{item.label}</span>
                <span className="contact-item-val" dir={item.href?.startsWith('tel') || item.href?.startsWith('mailto') ? 'ltr' : 'rtl'}>
                  {item.val}
                </span>
              </div>
            </a>
          ))}

          <div className="social-links">
            <a href="mailto:yousuf.almaqaleh@gmail.com" className="social-btn" title="Gmail">
              <span>📧</span>
            </a>
            <a href="https://wa.me/967712127541" target="_blank" rel="noreferrer" className="social-btn" title="WhatsApp">
              <span>💬</span>
            </a>
          </div>
        </div>

        <form className="contact-form glass-card" onSubmit={handleSubmit}>
          <h3>أرسل رسالة</h3>
          {sent && <div className="form-success">✅ تم إرسال رسالتك بنجاح!</div>}
          <div className="form-group">
            <label>الاسم</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="أدخل اسمك"
              required
            />
          </div>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="بريدك الإلكتروني"
              required
            />
          </div>
          <div className="form-group">
            <label>الرسالة</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="اكتب رسالتك هنا..."
              rows={5}
              required
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            🚀 إرسال الرسالة
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
