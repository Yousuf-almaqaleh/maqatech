import { useEffect } from 'react'
import './portfolio.css'
import heroImg from '../assets/hero-image.png'

// ─── Owner Info ─────────────────────────────────────────────────────────────
// Name:      Yousuf Al-Maqaleh / يوسف المقالح
// WhatsApp:  +967 712 127 541
// Email:     yousuf.almaqaleh@gmail.com
// ─────────────────────────────────────────────────────────────────────────────

// UPDATE: Replace placeholder '#' links below with your real URLs
const SOCIAL = [
  {
    label: 'LinkedIn',
    // UPDATE: add your LinkedIn link here
    href: 'https://linkedin.com/in/yousuf-almaqaleh',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    // UPDATE: add your Instagram link here
    href: 'https://instagram.com/yousuf.almaqaleh',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/967712127541',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    // UPDATE: add your GitHub link here
    href: 'https://github.com/yousuf-almaqaleh',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
]

// UPDATE: Replace '#' with your real project URLs
const PROJECTS = [
  {
    titleAr: 'نظام إدارة العيادات الذكي',
    titleEn: 'Smart Clinic System',
    descAr: 'حل متكامل لإدارة المرضى والمواعيد والتقارير الطبية بدقة عالية.',
    descEn: 'Integrated patient management, appointments, and medical reporting built with Python and SQL.',
    link: '#', // UPDATE: add your project link here
  },
  {
    titleAr: 'منصة MaqaTech للتجارة',
    titleEn: 'MaqaTech Commerce',
    descAr: 'متجر إلكتروني متكامل يدعم الدفع والتحكم في المخزون وتجربة مستخدم سلسة.',
    descEn: 'Full-featured e-commerce platform with payments, inventory control, and seamless UX.',
    link: '#', // UPDATE: add your project link here
  },
  {
    titleAr: 'تطبيق إدارة الموارد',
    titleEn: 'Resource Management App',
    descAr: 'نظام داخلي لتتبع الأصول والموارد البشرية وتحليل الأداء.',
    descEn: 'Internal system for tracking assets, human resources, and performance analytics.',
    link: '#', // UPDATE: add your project link here
  },
  {
    titleAr: 'بوابة الخدمات الإلكترونية',
    titleEn: 'E-Services Portal',
    descAr: 'منصة ويب تتيح للمستخدمين الوصول إلى الخدمات الرقمية بسهولة وأمان.',
    descEn: 'Web platform providing users with easy and secure access to digital services.',
    link: '#', // UPDATE: add your project link here
  },
]

const SKILLS = ['React', 'Python', 'HTML', 'CSS', 'JavaScript']

function SocialRow({ color }) {
  return (
    <div className="social-row">
      {SOCIAL.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={s.label}
          style={{ color }}
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}

function PortfolioApp() {
  useEffect(() => {
    // Reset direction to LTR on the html element (in case old app set RTL)
    document.documentElement.removeAttribute('dir')
    document.documentElement.lang = 'ar' // bilingual

    // Fade-in on load
    const els = document.querySelectorAll('.fade-in')
    requestAnimationFrame(() => {
      els.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 60)
      })
    })
  }, [])

  return (
    <div className="split-root">

      {/* ── SHARED NAV BAR — Centered floating pill label ── */}
      <nav className="shared-nav">
        <ul className="shared-nav-links">
          <li><a href="#home-en">Home</a></li>
          <li><a href="#skills-en">Skills</a></li>
          <li><a href="#projects-en">Projects</a></li>
          <li><a href="#contact-en">Contact</a></li>
        </ul>
      </nav>


      {/* ── HERO IMAGE BANNER ── */}
      <div className="hero-image-banner fade-in">
        <img src={heroImg} alt="Yousuf Al-Maqaleh - Full Stack Developer" className="hero-banner-img" />
      </div>

      <div className="halves-row">

      {/* ── LEFT HALF — English, black background, white text ── */}
      <div className="half half-en" dir="ltr" lang="en">

        {/* Hero EN */}
        <section id="home-en" className="section hero-section fade-in">
          <p className="role-tag">Full Stack Developer</p>
          <h1 className="hero-name">Yousuf Al-Maqaleh</h1>
          <p className="hero-sub">Building robust digital systems — clean code, thoughtful architecture.</p>
          <a href="#contact-en" className="cta-btn cta-en">Get in touch</a>
        </section>

        <hr className="section-divider" />

        {/* About EN */}
        <section className="section about-section fade-in">
          <h2 className="section-label">About</h2>
          <p className="body-text">
            I'm a full-stack developer based in Sana'a, Yemen, specialising in React
            applications and Python-powered backends.
          </p>
          <p className="body-text" style={{ marginTop: '0.75em' }}>
            I care about precision, performance, and creating software that genuinely
            solves real problems.
          </p>
        </section>

        <hr className="section-divider" />

        {/* Skills EN */}
        <section id="skills-en" className="section fade-in">
          <h2 className="section-label">Skills</h2>
          <ul className="tags-list">
            {SKILLS.map(s => <li key={s} className="tag tag-en">{s}</li>)}
          </ul>
        </section>

        <hr className="section-divider" />

        {/* Projects EN */}
        <section id="projects-en" className="section fade-in">
          <h2 className="section-label">Projects</h2>
          <div className="cards-grid">
            {PROJECTS.map((p, i) => (
              <a key={i} href={p.link} className="project-card card-en"
                rel="noopener noreferrer"
                target={p.link !== '#' ? '_blank' : undefined}>
                <h3 className="card-title">{p.titleEn}</h3>
                <p className="card-desc">{p.descEn}</p>
                <span className="card-arrow">→</span>
              </a>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Contact EN */}
        <section id="contact-en" className="section fade-in">
          <h2 className="section-label">Contact</h2>
          <ul className="contact-list">
            <li>
              <span className="contact-type">WhatsApp</span>
              <a href="https://wa.me/967712127541" className="contact-val contact-val-en"
                target="_blank" rel="noopener noreferrer">
                +967 712 127 541
              </a>
            </li>
            <li>
              <span className="contact-type">Email</span>
              <a href="mailto:yousuf.almaqaleh@gmail.com" className="contact-val contact-val-en">
                yousuf.almaqaleh@gmail.com
              </a>
            </li>
          </ul>
          <SocialRow color="#ffffff" />
        </section>

      </div>

      {/* ── CENTER DIVIDER ── */}
      <div className="center-line" aria-hidden="true" />

      {/* ── RIGHT HALF — Arabic, white background, black text ── */}
      <div className="half half-ar" dir="rtl" lang="ar">

        {/* Hero AR */}
        <section id="home-ar" className="section hero-section fade-in">
          <p className="role-tag">مطور ويب متكامل</p>
          <h1 className="hero-name">يوسف المقالح</h1>
          <p className="hero-sub">بناء أنظمة رقمية متقنة — كود نظيف، بنية محكمة.</p>
          <a href="#contact-ar" className="cta-btn cta-ar">تواصل معي</a>
        </section>

        <hr className="section-divider" />

        {/* About AR */}
        <section className="section about-section fade-in">
          <h2 className="section-label">من أنا</h2>
          <p className="body-text">
            مطور متكامل من صنعاء، اليمن، متخصص في تطبيقات React والأنظمة الخلفية
            المبنية بـ Python.
          </p>
          <p className="body-text" style={{ marginTop: '0.75em' }}>
            أهتم بالدقة والأداء وبناء برمجيات تحل مشكلات حقيقية بفعالية.
          </p>
        </section>

        <hr className="section-divider" />

        {/* Skills AR */}
        <section id="skills-ar" className="section fade-in">
          <h2 className="section-label">المهارات</h2>
          <ul className="tags-list">
            {SKILLS.map(s => <li key={s} className="tag tag-ar">{s}</li>)}
          </ul>
        </section>

        <hr className="section-divider" />

        {/* Projects AR */}
        <section id="projects-ar" className="section fade-in">
          <h2 className="section-label">المشاريع</h2>
          <div className="cards-grid">
            {PROJECTS.map((p, i) => (
              <a key={i} href={p.link} className="project-card card-ar"
                rel="noopener noreferrer"
                target={p.link !== '#' ? '_blank' : undefined}>
                <h3 className="card-title">{p.titleAr}</h3>
                <p className="card-desc">{p.descAr}</p>
                <span className="card-arrow">←</span>
              </a>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Contact AR */}
        <section id="contact-ar" className="section fade-in">
          <h2 className="section-label">تواصل</h2>
          <ul className="contact-list">
            <li>
              <span className="contact-type">واتساب</span>
              <a href="https://wa.me/967712127541" className="contact-val contact-val-ar"
                target="_blank" rel="noopener noreferrer">
                +967 712 127 541
              </a>
            </li>
            <li>
              <span className="contact-type">البريد</span>
              <a href="mailto:yousuf.almaqaleh@gmail.com" className="contact-val contact-val-ar">
                yousuf.almaqaleh@gmail.com
              </a>
            </li>
          </ul>
          <SocialRow color="#000000" />
        </section>

      </div>
      </div>
{/* end .halves-row */}

      {/* ── FOOTER — solid black, single copyright line ── */}
      <footer className="simple-footer">
        © 2025 MaqaTech · Yousuf Al-Maqaleh (يوسف المقالح) · All Rights Reserved | جميع الحقوق محفوظة
      </footer>

    </div>
  )
}

export default PortfolioApp
