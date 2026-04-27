const projectList = [
  { title: 'نظام إدارة العيادات', tech: ['Python', 'SQL'], emoji: '🏥' },
  { title: 'متجر MaqaTech الإلكتروني', tech: ['React', 'Node.js'], emoji: '🛒' },
  { title: 'برنامج إدارة المخزون', tech: ['Python', 'Desktop'], emoji: '📦' },
  { title: 'تطبيق إدارة المهام', tech: ['JS', 'Local Storage'], emoji: '✅' },
]

function Projects() {
  return (
    <div className="container">
      <div className="text-center" style={{marginBottom: '60px'}}>
        <h2 style={{fontSize: '2.2rem', fontWeight: '800', marginBottom: '15px'}}>أبرز المشاريع</h2>
        <p style={{color: 'var(--text-muted)'}}>نماذج من الأعمال التي قمت بتطويرها مؤخراً</p>
      </div>
      <div className="grid">
        {projectList.map((proj, i) => (
          <div key={i} className="project-card">
            <div className="project-img" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem'}}>
              {proj.emoji}
            </div>
            <div className="project-content">
              <div className="project-title">{proj.title}</div>
              <div className="project-tags">
                {proj.tech.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
