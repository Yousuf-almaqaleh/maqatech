const skillSets = [
  { icon: '💻', title: 'لغات البرمجة', desc: 'Python, JavaScript, C++, SQL. كود نظيف وقابل للتطوير.' },
  { icon: '🌐', title: 'تطوير المواقع', desc: 'React.js, Node.js, HTML5/CSS3. مواقع سريعة ومتجاوبة.' },
  { icon: '⚙️', title: 'برمجة الأنظمة', desc: 'بناء أنظمة سطح المكتب وقواعد البيانات المتقدمة.' },
  { icon: '🛠️', title: 'الأدوات والتقنيات', desc: 'Git, Linux, Docker, REST APIs. أفضل الممارسات التقنية.' }
]

function Skills() {
  return (
    <div className="container">
      <div className="text-center" style={{marginBottom: '60px'}}>
        <h2 style={{fontSize: '2.2rem', fontWeight: '800', marginBottom: '15px'}}>ما أتقنه من مهارات</h2>
        <p style={{color: 'var(--text-muted)'}}>أستخدم أحدث التقنيات لبناء حلول برمجية متكاملة</p>
      </div>
      <div className="grid">
        {skillSets.map((skill, i) => (
          <div key={i} className="card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-title">{skill.title}</div>
            <div className="skill-desc">{skill.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
