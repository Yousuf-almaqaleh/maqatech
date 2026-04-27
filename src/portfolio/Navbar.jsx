import { useState } from 'react'

const navLinks = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'عني' },
  { id: 'skills', label: 'المهارات' },
  { id: 'projects', label: 'المشاريع' },
  { id: 'contact', label: 'تواصل معي' },
]

function Navbar({ activeSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`pf-nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="pf-logo" onClick={() => scrollTo('home')}>
          <span>يوسف المقالح</span>
        </div>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(l => (
            <button
              key={l.id}
              className={`nav-item ${activeSection === l.id ? 'active' : ''}`}
              onClick={() => scrollTo(l.id)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
