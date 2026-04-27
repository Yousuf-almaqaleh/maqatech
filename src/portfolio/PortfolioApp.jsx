import { useState, useEffect } from 'react'
import Logo from './Logo'
import './portfolio.css'

const translations = {
  ar: {
    dir: 'rtl',
    nav: { home: 'الرئيسية', skills: 'المهارات', projects: 'المشاريع', contact: 'تواصل معي', lang: 'English' },


    hero: { 
      tag: 'مبرمج ومطور حلول رقمية', 
      title: '', 
      desc: 'أهلاً بك، أنا يوسف المقالح. متخصص في بناء أنظمة متكاملة ومواقع ويب عصرية تجمع بين الأداء العالي والتصميم الجذاب.', 

      cta1: 'استكشف مشاريعي', 
      cta2: 'تواصل الآن' 
    },
    skills: { 
      title: 'المهارات والخبرات', 
      sub: 'أدوات وتقنيات نتقنها لنحول رؤيتك إلى واقع ملموس.', 
      languages: [
        { name: 'العربية', level: 'اللغة الأم', percent: '100%' },
        { name: 'الإنجليزية', level: 'مستوى متقدم', percent: '85%' },
      ],
      tech: [
        { name: 'JavaScript', level: '95%' },
        { name: 'Python', level: '90%' },
        { name: 'React / Next.js', level: '92%' },
        { name: 'Node.js', level: '88%' },
        { name: 'SQL / PostgreSQL', level: '85%' },
        { name: 'C# / .NET', level: '80%' },
      ],
      items: [

        { icon: '🚀', title: 'تطوير الويب', desc: 'بناء واجهات تفاعلية باستخدام React و Next.js مع التركيز على تجربة المستخدم.' },
        { icon: '⚙️', title: 'هندسة الأنظمة', desc: 'تصميم وبناء قواعد بيانات معقدة وأنظمة خلفية قوية باستخدام Node.js و Python.' },
        { icon: '🎨', title: 'تصميم الواجهات', desc: 'خلق تصاميم عصرية وجذابة تعكس هوية علامتك التجارية بدقة.' },
        { icon: '📱', title: 'تطبيقات الهاتف', desc: 'تطوير تطبيقات سلسة وسريعة تعمل على مختلف أنظمة التشغيل.' }
      ]
    },

    projects: { 
      title: 'أعمالي المميزة', 
      sub: 'مجموعة من التحديات التي تحولت إلى نجاحات برمجية.', 
      items: [


        { title: 'نظام إدارة العيادات الذكي', tech: ['Python', 'SQL', 'Desktop'], emoji: '🏥' },
        { title: 'منصة MaqaTech للتجارة', tech: ['React', 'Node.js', 'PostgreSQL'], emoji: '🛒' },
        { title: 'تطبيق إدارة الموارد', tech: ['JavaScript', 'API', 'UI/UX'], emoji: '📊' },
        { title: 'بوابة الخدمات الإلكترونية', tech: ['Next.js', 'Tailwind'], emoji: '🌐' },
      ]
    },
    contact: {
      title: 'لنبدأ العمل معاً',
      desc: 'هل لديك فكرة مشروع؟ دعنا نحولها إلى واقع.',
      email: 'البريد الإلكتروني',

      phone: 'رقم الهاتف',
      location: 'الموقع',
      locVal: 'صنعاء، اليمن'
    },

    footer: { copy: 'جميع الحقوق محفوظة' }
  },
  en: {
    dir: 'ltr',
    nav: { home: 'Home', skills: 'Skills', projects: 'Projects', contact: 'Contact', lang: 'العربية' },


    hero: { 
      tag: 'Full Stack Developer', 
      title: '', 
      desc: 'Hi, I\'m Yousuf Al-Maqaleh. Specializing in building integrated systems and modern websites that combine high performance with stunning design.', 
      cta1: 'Explore Projects', 
      cta2: 'Contact Now' 
    },
    skills: { 
      title: 'Skills & Expertise', 
      sub: 'Tools and technologies we master to turn your vision into reality.', 
      languages: [
        { name: 'Arabic', level: 'Native', percent: '100%' },
        { name: 'English', level: 'Advanced', percent: '85%' },
      ],
      tech: [
        { name: 'JavaScript', level: '95%' },
        { name: 'Python', level: '90%' },
        { name: 'React / Next.js', level: '92%' },
        { name: 'Node.js', level: '88%' },
        { name: 'SQL / PostgreSQL', level: '85%' },
        { name: 'C# / .NET', level: '80%' },
      ],
      items: [

        { icon: '🚀', title: 'Web Development', desc: 'Building interactive interfaces using React and Next.js with a focus on UX.' },
        { icon: '⚙️', title: 'Systems Engineering', desc: 'Designing and building complex databases and robust backends using Node.js & Python.' },
        { icon: '🎨', title: 'UI/UX Design', desc: 'Creating modern and attractive designs that reflect your brand identity accurately.' },
        { icon: '📱', title: 'Mobile Apps', desc: 'Developing smooth and fast applications that work on various operating systems.' }
      ]
    },

    projects: { 
      title: 'Featured Works', 
      sub: 'A collection of challenges turned into software successes.', 
      items: [


        { title: 'Smart Clinic System', tech: ['Python', 'SQL', 'Desktop'], emoji: '🏥' },
        { title: 'MaqaTech Commerce', tech: ['React', 'Node.js', 'PostgreSQL'], emoji: '🛒' },
        { title: 'Resource Management', tech: ['JavaScript', 'API', 'UI/UX'], emoji: '📊' },
        { title: 'E-Services Portal', tech: ['Next.js', 'Tailwind'], emoji: '🌐' },
      ]
    },
    contact: {
      title: 'Let\'s Work Together',
      desc: 'Have a project idea? Let\'s make it happen.',
      email: 'Email',

      phone: 'Phone',
      location: 'Location',
      locVal: 'Sana\'a, Yemen'
    },

    footer: { copy: 'All rights reserved' }
  }
}

function PortfolioApp() {
  const [lang, setLang] = useState('ar')
  const [scrolled, setScrolled] = useState(false)
  const [showTopBtn, setShowTopBtn] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [nightMode, setNightMode] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const t = translations[lang]


  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      setShowTopBtn(window.scrollY > 500)
    }

    // Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [lang, t.dir])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="portfolio-app">
      {nightMode && <div className="night-mode-overlay"></div>}
      {/* Background Orbs */}

      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="logo-section">
            <Logo height={50} />
          </div>


          <div className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li style={{ position: 'relative' }}>
                <button className="settings-btn" onClick={() => setSettingsOpen(true)}>
                  ☰
                </button>
                {settingsOpen && (
                  <>
                    <div className="settings-overlay" onClick={() => setSettingsOpen(false)}></div>
                    <div className="settings-sidebar">
                      <div className="sidebar-header">
                        <h3>{lang === 'ar' ? 'الإعدادات' : 'Settings'}</h3>
                        <button className="close-btn" onClick={() => setSettingsOpen(false)}>✕</button>
                      </div>
                      <div className="sidebar-content">
                        <button className="sidebar-action" onClick={() => { setLang(lang === 'ar' ? 'en' : 'ar'); setSettingsOpen(false); }}>
                          <span className="icon">🌐</span>
                          <span className="text">{t.nav.lang}</span>
                        </button>
                        <button className="sidebar-action" onClick={() => { setNightMode(!nightMode); setSettingsOpen(false); }}>
                          <span className="icon">👁️</span>
                          <span className="text">{lang === 'ar' ? 'حماية العين' : 'Eye Protection'}</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </li>

              <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav.home}</a></li>
              <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>{t.nav.skills}</a></li>
              <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t.nav.projects}</a></li>
              <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a></li>
            </ul>



          </div>

          <div className="nav-cta">
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>


        </div>
      </nav>

      <main>
        <section id="home" className="hero reveal">
          <div className="container">
            <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
              <div style={{ flex: '1', minWidth: '320px' }}>
                <div className="hero-tag">
                  <span className="pulse"></span>
                  {t.hero.tag}
                </div>
                {t.hero.title && <h1 className="title-reveal">{t.hero.title}</h1>}

                <p>{t.hero.desc}</p>
                <div className="hero-btns">
                  <a href="#projects" className="btn btn-primary">{t.hero.cta1}</a>
                  <a href="#contact" className="btn btn-outline">{t.hero.cta2}</a>
                </div>
              </div>
              <div className="hero-image">
                <div className="profile-wrap">
                  <div className="profile-inner">
                    <Logo height={120} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Language Skills Section */}
        <section className="section reveal" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className="card" style={{ 
              display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', 
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))',
              padding: '24px'
            }}>
              <div style={{ flex: '1', minWidth: '200px' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>{lang === 'ar' ? 'مهارات اللغة' : 'Language Skills'}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{lang === 'ar' ? 'القدرة على التواصل بمستويات احترافية.' : 'Professional communication proficiency.'}</p>
              </div>
              <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', flex: '2' }}>
                {t.skills.languages.map((l, idx) => (
                  <div key={idx} style={{ flex: '1', minWidth: '150px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>{l.name}</span>
                      <span style={{ color: 'var(--primary)', fontSize: '0.8rem' }}>{l.level}</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div style={{ width: l.percent, height: '100%', background: 'linear-gradient(to right, var(--primary), var(--secondary))' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Programming Languages Section */}
        <section className="section reveal" style={{ paddingTop: '0' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {lang === 'ar' ? 'لغات البرمجة والتقنيات' : 'Programming Languages & Tech'}
              </h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
              {t.skills.tech.map((tech, idx) => (
                <div key={idx} className="tech-badge">
                  {tech.name}
                  <span className="tech-level" style={{ width: tech.level }}></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal">

          <div className="container">

            <div className="text-center" style={{ marginBottom: '80px' }}>
              <h2 className="section-title">{t.skills.title}</h2>
              <p className="section-sub">{t.skills.sub}</p>
            </div>
            <div className="grid">
              {t.skills.items.map((s, i) => (
                <div key={i} className="card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="card-icon">{s.icon}</span>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="container">
            <div className="text-center" style={{ marginBottom: '80px' }}>
              <h2 className="section-title">{t.projects.title}</h2>
              <p className="section-sub">{t.projects.sub}</p>
            </div>
            <div className="grid">
              {t.projects.items.map((p, i) => (
                <div key={i} className="project-card card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="project-img">
                    {p.emoji}
                  </div>
                  <div className="project-body">
                    <h3 className="card-title" style={{ fontSize: '1.3rem' }}>{p.title}</h3>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                      {p.tech.map((tag, j) => <span key={j} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section reveal">
          <div className="container">
            <div className="card reveal" style={{ padding: '60px', textAlign: 'center' }}>
              <h2 className="section-title">{t.contact.title}</h2>
              <p className="section-sub" style={{ marginBottom: '40px' }}>{t.contact.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                <div className="contact-item">
                  <div className="contact-label">{t.contact.email}</div>
                  <div className="contact-value">yousuf.almaqaleh@gmail.com</div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">{t.contact.phone}</div>
                  <div className="contact-value" dir="ltr">+967 712 127 541</div>
                </div>
                <div className="contact-item">
                  <div className="contact-label">{t.contact.location}</div>
                  <div className="contact-value">{t.contact.locVal}</div>
                </div>
              </div>
              <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                 <a href="https://wa.me/967712127541" className="btn btn-primary">{lang === 'ar' ? 'مراسلة عبر واتساب' : 'Message via WhatsApp'}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
            <Logo height={50} />
            <div className="copyright" style={{ marginTop: '0', paddingTop: '20px', borderTop: '1px solid var(--border)', width: '100%' }}>
              © {new Date().getFullYear()} Yousuf Al-Maqaleh — {t.footer.copy}
            </div>
          </div>
        </div>

      </footer>

      {/* Floating Action Button */}
      <button className={`back-to-top ${showTopBtn ? 'visible' : ''}`} onClick={scrollToTop}>
        ↑
      </button>

      <style>{`
        .settings-btn {
          background: var(--glass); border: 1px solid var(--border);
          color: white; width: 40px; height: 40px; border-radius: 50%;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          font-size: 1.2rem; transition: all 0.3s;
        }
        .settings-btn:hover { background: var(--primary); border-color: var(--primary); }
        
        .settings-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.4); backdrop-filter: blur(4px);
          z-index: 2000; animation: fadeIn 0.3s;
        }
        .settings-sidebar {
          position: fixed; top: 0; left: 0; bottom: 0;
          width: 300px; background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px); border-right: 1px solid var(--border);
          z-index: 2001; padding: 40px 24px;
          display: flex; flex-direction: column; gap: 30px;
          box-shadow: 20px 0 50px rgba(0,0,0,0.5);
          animation: slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        [dir="rtl"] .settings-sidebar { 
          left: auto; right: 0; 
          border-right: none; border-left: 1px solid var(--border); 
          animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
          box-shadow: -20px 0 50px rgba(0,0,0,0.5);
        }

        
        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
        @keyframes slideInLeft { from { transform: translateX(-100%); } to { transform: translateX(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
        .sidebar-header h3 { font-size: 1.5rem; font-weight: 800; }
        .close-btn { background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer; }
        
        .sidebar-content { display: flex; flex-direction: column; gap: 15px; }
        .sidebar-action {
          background: var(--glass); border: 1px solid var(--border);
          color: white; padding: 16px 20px; border-radius: 16px;
          display: flex; align-items: center; gap: 15px; cursor: pointer;
          transition: all 0.3s; width: 100%;
        }
        .sidebar-action:hover { background: var(--primary); transform: translateY(-3px); }
        .sidebar-action .icon { font-size: 1.4rem; }
        .sidebar-action .text { font-weight: 600; font-size: 1rem; }

        [dir="rtl"] .settings-dropdown button { text-align: right; }
        .settings-dropdown button:hover { background: var(--glass); color: var(--primary); }
        
        .nav-action-btn {
          background: var(--glass); border: 1px solid var(--border);
          color: white; padding: 8px 16px; border-radius: 100px;
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          font-size: 0.85rem; font-weight: 600; transition: all 0.3s;
        }
        .nav-action-btn:hover { background: var(--primary); border-color: var(--primary); transform: translateY(-2px); }
        
        .nav-divider {
          width: 1px; height: 20px; background: var(--border); margin: 0 10px;
        }
        @media (max-width: 768px) {
          .nav-divider { width: 40px; height: 1px; margin: 10px 0; }
        }

        .night-mode-overlay {

          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(255, 150, 0, 0.08);
          pointer-events: none; z-index: 9999;
          backdrop-filter: sepia(0.3) saturate(0.8);
          transition: opacity 0.5s;
        }

        .tech-badge {
          background: var(--glass); border: 1px solid var(--border);
          padding: 10px 20px; border-radius: 12px; color: white;
          font-weight: 600; font-size: 0.9rem; position: relative;
          overflow: hidden; transition: all 0.3s;
        }
        .tech-badge:hover { transform: translateY(-5px); border-color: var(--primary); background: rgba(99, 102, 241, 0.1); }
        .tech-level {
          position: absolute; bottom: 0; left: 0; height: 3px;
          background: var(--primary); opacity: 0.5;
        }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }


        .reveal-visible { opacity: 1; transform: translateY(0); }
        
        .section-title { fontSize: 3rem; fontWeight: 900; marginBottom: 20px; }
        .section-sub { color: var(--text-muted); fontSize: 1.2rem; maxWidth: 700px; margin: 0 auto; }
        
        .contact-label { color: var(--primary); fontWeight: 700; marginBottom: 5px; }
        .contact-value { fontSize: 1.1rem; }
        
        .back-to-top {
          position: fixed; bottom: 30px; right: 30px;
          width: 50px; height: 50px; border-radius: 50%;
          background: var(--primary); color: white;
          border: none; cursor: pointer; display: flex;
          align-items: center; justify-content: center;
          font-size: 1.5rem; opacity: 0; pointer-events: none;
          transition: all 0.3s; z-index: 1000;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        .back-to-top.visible { opacity: 1; pointer-events: auto; }
        .back-to-top:hover { transform: translateY(-5px); background: var(--secondary); }
        
        .mobile-toggle { display: none; background: none; border: none; color: white; font-size: 2rem; cursor: pointer; }
        
        @media (max-width: 768px) {
          .hide-mobile { display: none; }
          .mobile-toggle { display: block; }
          .nav-menu {
            position: fixed; top: 72px; left: 0; right: 0;
            background: var(--bg-dark); padding: 40px 20px;
            border-bottom: 1px solid var(--border);
            transform: translateY(-150%); transition: transform 0.4s;
          }
          .nav-menu.open { transform: translateY(0); }
          .nav-links { flex-direction: column; gap: 20px; }
          .section-title { font-size: 2.2rem; }
        }

        .pulse {
          width: 8px; height: 8px; background: var(--primary); border-radius: 50%;
          display: inline-block; position: relative; margin-right: 8px;
        }
        [dir="rtl"] .pulse { margin-right: 0; margin-left: 8px; }
        .pulse::after {
          content: ''; position: absolute; width: 100%; height: 100%;
          background: var(--primary); border-radius: 50%;
          animation: pulse-ring 1.5s infinite;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(3); opacity: 0; }
        }
        .scrolled { background: rgba(15, 23, 42, 0.9) !important; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
      `}</style>
    </div>
  )
}


export default PortfolioApp

