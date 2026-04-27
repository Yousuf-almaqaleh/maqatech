import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('شكراً لرسالتك! سنتواصل معك قريباً.');
  };

  return (
    <div className="contact-page" dir="rtl">
      <section className="contact-hero">
        <h1>تواصل معنا</h1>
        <p className="hero-subtitle">نحن هنا للإجابة على استفساراتكم ومساعدتكم</p>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <div className="icon">📍</div>
            <div>
              <h3>موقعنا</h3>
              <p>صنعاء، الجمهورية اليمنية</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">📞</div>
            <div>
              <h3>اتصل بنا</h3>
              <p>+967 770 000 000</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h3>البريد الإلكتروني</h3>
              <p>info@example.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>الاسم الكامل</label>
            <input type="text" placeholder="أدخل اسمك هنا" required />
          </div>
          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input type="email" placeholder="example@mail.com" required />
          </div>
          <div className="form-group">
            <label>الموضوع</label>
            <input type="text" placeholder="كيف يمكننا مساعدتك؟" required />
          </div>
          <div className="form-group">
            <label>الرسالة</label>
            <textarea rows="5" placeholder="اكتب رسالتك هنا..." required></textarea>
          </div>
          <button type="submit" className="submit-btn">إرسال الرسالة</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
