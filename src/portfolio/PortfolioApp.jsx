import { useEffect, useState } from 'react'
import './portfolio.css'
import Sidebar from './Sidebar'
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
    label: 'GitHub',
    // UPDATE: add your GitHub link here
    href: 'https://github.com/yousuf-almaqaleh',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/967712127541',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.847 1.666 5.485l-1.121 4.092 4.148-1.089l-.204-.185zm12.39-4.83c-.301-.15-1.78-.878-2.056-.978-.275-.1-.476-.15-.676.15-.2.3-.778.978-.952 1.178-.174.2-.349.226-.65.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.497-1.783-1.673-2.083-.175-.3-.019-.462.131-.611.135-.135.301-.35.45-.526.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.631-.926-2.235-.244-.593-.491-.512-.676-.521-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.801.375-.276.3-1.052 1.026-1.052 2.502 0 1.477 1.077 2.903 1.227 3.103.15.2 2.119 3.235 5.132 4.536.716.31 1.275.495 1.71.634.718.228 1.372.196 1.888.118.576-.086 1.78-.726 2.031-1.427.25-.7.25-1.301.175-1.427-.076-.126-.276-.201-.577-.352z"/>
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
  const [lang, setLang] = useState('ar') // default: Arabic
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.removeAttribute('dir')
    document.documentElement.lang = lang

    // Re-trigger fade-in on language switch
    const els = document.querySelectorAll('.fade-in')
    els.forEach(el => el.classList.remove('visible'))
    requestAnimationFrame(() => {
      els.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 40)
      })
    })
  }, [lang])

  const isAr = lang === 'ar'
  const isEn = lang === 'en'

  return (
    <div className="split-root" style={{ background: isEn ? '#000' : '#fff' }}>

      {/* ── SHARED NAV BAR ── */}
      <nav className="shared-nav">
        <ul className="shared-nav-links" dir={isAr ? 'rtl' : 'ltr'}>
          <li><a href={isAr ? '#home-ar' : '#home-en'}>{isAr ? 'الرئيسية' : 'Home'}</a></li>
          <li><a href={isAr ? '#skills-ar' : '#skills-en'}>{isAr ? 'المهارات' : 'Skills'}</a></li>
          <li><a href={isAr ? '#projects-ar' : '#projects-en'}>{isAr ? 'المشاريع' : 'Projects'}</a></li>
          <li><a href={isAr ? '#contact-ar' : '#contact-en'}>{isAr ? 'تواصل' : 'Contact'}</a></li>
          <li className={`lang-toggle-item ${isAr ? 'lang-toggle-item-ar' : ''}`}>
            <button
              className={`lang-toggle ${isAr ? 'lang-toggle-ar' : 'lang-toggle-en'}`}
              onClick={() => setLang(isAr ? 'en' : 'ar')}
              aria-label="Toggle language"
              title={isAr ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign:'middle', marginInlineEnd:'4px'}}>
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {isAr ? 'EN' : 'ع'}
            </button>
          </li>
        </ul>
      </nav>

      {/* ── MOBILE HAMBURGER ── */}
      <button 
        className={`mobile-hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* ── SIDEBAR MENU (for mobile) ── */}
      <div className={`sidebar-overlay ${menuOpen ? 'show' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`sidebar-container ${menuOpen ? 'sidebar-open' : ''}`}>
         <button className="sidebar-close" onClick={() => setMenuOpen(false)}>×</button>
         <Sidebar 
            open={menuOpen} 
            active={null} 
            setActive={(id) => {
              setMenuOpen(false);
              const target = isAr ? `${id}-ar` : `${id}-en`;
              const el = document.getElementById(target);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} 
         />
         {/* Language Toggle in Sidebar for mobile convenience */}
         <div style={{padding: '20px', marginTop: 'auto'}}>
            <button
               className={`lang-toggle ${isAr ? 'lang-toggle-ar' : 'lang-toggle-en'}`}
               onClick={() => { setLang(isAr ? 'en' : 'ar'); setMenuOpen(false); }}
               style={{width: '100%', justifyContent: 'center'}}
            >
               {isAr ? 'Switch to English' : 'التبديل إلى الإنجليزية'}
            </button>
         </div>
      </div>


      {/* ── HERO IMAGE BANNER ── */}
      <div className="hero-image-banner fade-in">
        <img src={heroImg} alt="Yousuf Al-Maqaleh - Full Stack Developer" className="hero-banner-img" />
      </div>

      <div className="halves-row">

      {/* ── LEFT HALF — English ── */}
      <div className={`half half-en ${isEn ? 'half-active' : isAr ? 'half-hidden' : ''}`} dir="ltr" lang="en">

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
              <span className="contact-type">Phone</span>
              <a href="tel:+967712127541" className="contact-val contact-val-en">
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

      {/* ── CENTER DIVIDER — only shown in split mode (neither lang is active) ── */}
      {!isAr && !isEn && <div className="center-line" aria-hidden="true" />}

      {/* ── RIGHT HALF — Arabic ── */}
      <div className={`half half-ar ${isAr ? 'half-active' : isEn ? 'half-hidden' : ''}`} dir="rtl" lang="ar">

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
              <span className="contact-type">الهاتف</span>
              <a href="tel:+967712127541" className="contact-val contact-val-ar">
                712 127 541 967+
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
        {isAr ? (
          '© 2025 MaqaTech · يوسف المقالح · جميع الحقوق محفوظة'
        ) : (
          '© 2025 MaqaTech · Yousuf Al-Maqaleh · All Rights Reserved'
        )}
      </footer>

    </div>
  )
}

export default PortfolioApp
