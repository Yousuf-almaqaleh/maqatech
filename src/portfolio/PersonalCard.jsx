function PersonalCard() {
  return (
    <div className="personal-card">
      <div className="pc-header">
        <div className="pc-avatar">ي</div>
        <div className="pc-name">يوسف المقالح</div>
        <div className="pc-role">مبرمج أنظمة ومواقع ويب</div>
        <div className="pc-badge">متاح للعمل ✅</div>
      </div>

      <div className="pc-divider" />

      <div className="pc-section-title">معلومات التواصل</div>
      <div className="pc-info-list">
        <div className="pc-info-item">
          <span className="pc-info-icon">📞</span>
          <div>
            <span className="pc-info-label">الهاتف</span>
            <span className="pc-info-val" dir="ltr">+967 712 127 541</span>
          </div>
        </div>
        <div className="pc-info-item">
          <span className="pc-info-icon">✉️</span>
          <div>
            <span className="pc-info-label">البريد</span>
            <span className="pc-info-val" dir="ltr" style={{fontSize:'0.78rem'}}>yousuf.almaqaleh@gmail.com</span>
          </div>
        </div>
        <div className="pc-info-item">
          <span className="pc-info-icon">📍</span>
          <div>
            <span className="pc-info-label">الموقع</span>
            <span className="pc-info-val">اليمن</span>
          </div>
        </div>
        <div className="pc-info-item">
          <span className="pc-info-icon">🌐</span>
          <div>
            <span className="pc-info-label">اللغات</span>
            <span className="pc-info-val">العربية · الإنجليزية (متوسط)</span>
          </div>
        </div>
      </div>

      <div className="pc-divider" />

      <div className="pc-section-title">المهارات الأساسية</div>
      <div className="pc-skills">
        {['Python','JavaScript','React','C++','MySQL','Linux','Git'].map((s,i) => (
          <span key={i} className="pc-skill-tag">{s}</span>
        ))}
      </div>

      <div className="pc-divider" />

      <div className="pc-actions">
        <a href="mailto:yousuf.almaqaleh@gmail.com" className="pc-btn-primary">
          📧 راسلني
        </a>
        <a href="https://wa.me/967712127541" target="_blank" rel="noreferrer" className="pc-btn-outline">
          💬 واتساب
        </a>
      </div>
    </div>
  )
}

export default PersonalCard
