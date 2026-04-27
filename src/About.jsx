import React from 'react';

function About() {
  return (
    <div className="about-page" dir="rtl">
      <section className="about-hero">
        <h1>من نحن</h1>
        <p className="hero-subtitle">نحن نسعى لتقديم أفضل الحلول التقنية المبتكرة لعملائنا</p>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="info-card">
            <div className="icon">🚀</div>
            <h2>رؤيتنا</h2>
            <p>أن نكون الرائدين في مجال التحول الرقمي وتقديم تجارب مستخدم استثنائية.</p>
          </div>
          <div className="info-card">
            <div className="icon">🎯</div>
            <h2>مهمتنا</h2>
            <p>توفير أدوات قوية وسهلة الاستخدام تساعد الشركات والأفراد على النمو والنجاح.</p>
          </div>
          <div className="info-card">
            <div className="icon">💎</div>
            <h2>قيمنا</h2>
            <p>الابتكار، الجودة، والشفافية هي الركائز الأساسية التي نبني عليها كل مشاريعنا.</p>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-item">
          <h3>+100</h3>
          <p>عميل سعيد</p>
        </div>
        <div className="stat-item">
          <h3>+50</h3>
          <p>مشروع منجز</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>دعم فني</p>
        </div>
      </section>
    </div>
  );
}

export default About;
