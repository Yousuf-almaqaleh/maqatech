const navItems = [
  { id: 'home',     icon: '🏠', label: 'الرئيسية' },
  { id: 'skills',  icon: '🛠', label: 'المهارات' },
  { id: 'projects',icon: '🚀', label: 'المشاريع' },
]

function MaqaLogo() {
  return (
    <div className="sidebar-logo">
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <polygon points="15,42 50,18 85,42 75,42 50,26 25,42" fill="#2563eb" />
        <rect x="15" y="44" width="18" height="30" rx="3" fill="#fff" />
        <rect x="41" y="44" width="18" height="30" rx="3" fill="#fff" />
        <rect x="15" y="44" width="44" height="14" rx="3" fill="#fff" />
        <rect x="29" y="58" width="14" height="16" rx="2" fill="#0c1220" />
      </svg>
      <div>
        <div className="logo-brand">
          <span className="logo-maqa">Maqa</span><span className="logo-tech">Tech</span>
        </div>
        <div className="logo-tagline">Software Solutions</div>
      </div>
    </div>
  )
}

function Sidebar({ active, setActive, open }) {
  return (
    <aside className={`dashboard-sidebar ${open ? 'sidebar-open' : ''}`}>
      <MaqaLogo />

      <div className="sidebar-divider" />

      <nav className="sidebar-nav">
        <p className="sidebar-section-label">القائمة</p>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${active === item.id ? 'active' : ''}`}
            onClick={() => setActive(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-divider" />

      <div className="sidebar-footer">
        <div className="sidebar-avatar">ي</div>
        <div className="sidebar-user">
          <span className="sidebar-username">يوسف المقالح</span>
          <span className="sidebar-userrole">مبرمج أنظمة</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
