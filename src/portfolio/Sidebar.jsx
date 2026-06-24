const navItems = [
  { id: 'home',     label: 'HOME' },
  { id: 'skills',  label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
]

function Sidebar({ active, setActive, open, isAr, setLang }) {
  return (
    <aside className={`dashboard-sidebar ${open ? 'sidebar-open' : ''}`}>
      <nav className="sidebar-nav">
        <p className="sidebar-section-label">MENU</p>
        <div className="sidebar-divider" />
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${active === item.id ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
          >
            <span>{item.label}</span>
          </button>
        ))}
        
        {/* Language Toggle inserted after PROJECT */}
        <div className="sidebar-divider" />
        <button
          className={`lang-toggle sidebar-lang-btn ${isAr ? 'lang-toggle-ar' : 'lang-toggle-en'}`}
          onClick={() => { setLang(isAr ? 'en' : 'ar'); setActive ? setActive(null) : null; }}
          style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
        >
          {isAr ? 'SWITCH TO ENGLISH' : 'التبديل إلى الإنجليزية'}
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar
