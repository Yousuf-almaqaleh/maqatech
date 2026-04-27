function About() {
  return (
    <div className="section-wrap">
      <div className="section-header">
        <span className="section-tag">من أنا</span>
        <h2 className="section-title">نبذة عني</h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-card glass-card">
          <div className="about-icon-wrap">
            <span className="about-icon">🧑‍💻</span>
          </div>
          <h3>يوسف المقالح</h3>
          <p className="about-role">مبرمج أنظمة ومواقع ويب</p>
          <p className="about-bio">
            مبرمج شغوف بالتقنية وحل المشكلات، متخصص في برمجة الأنظمة وتطوير مواقع الويب.
            أسعى دائماً لتقديم حلول تقنية مبتكرة وعملية تلبي احتياجات العملاء وتتجاوز توقعاتهم.
          </p>
          <div className="about-info-list">
            <div className="info-item">
              <span className="info-icon">🎓</span>
              <div>
                <span className="info-label">التخصص</span>
                <span className="info-val">برمجة الأنظمة وتطوير الويب</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">🌍</span>
              <div>
                <span className="info-label">اللغات</span>
                <span className="info-val">العربية (أصلية) — الإنجليزية (متوسط)</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <span className="info-label">الهاتف</span>
                <span className="info-val" dir="ltr">+967 712 127 541</span>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <span className="info-label">البريد</span>
                <span className="info-val" dir="ltr">yousuf.almaqaleh@gmail.com</span>
              </div>
            </div>
          </div>
          <a
            href="mailto:yousuf.almaqaleh@gmail.com"
            className="btn-primary"
            style={{ marginTop: '1.5rem', display: 'inline-block', textDecoration: 'none' }}
          >
            📥 تحميل السيرة الذاتية
          </a>
        </div>

        <div className="about-cards-col">
          {[
            { icon: '🎯', title: 'هدفي', desc: 'بناء منتجات رقمية عالية الجودة تخدم المجتمع وتحل مشكلات حقيقية.' },
            { icon: '💡', title: 'أسلوبي', desc: 'أجمع بين الكود النظيف والتصميم الوظيفي لضمان تجربة مستخدم متميزة.' },
            { icon: '🚀', title: 'طموحي', desc: 'التطور المستمر ومواكبة أحدث التقنيات لتقديم أفضل الحلول.' },
            { icon: '🤝', title: 'قيمي', desc: 'الأمانة والاحترافية والالتزام بالمواعيد في كل مشروع أتولاه.' },
          ].map((c, i) => (
            <div key={i} className="mini-card glass-card">
              <span className="mini-icon">{c.icon}</span>
              <div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
