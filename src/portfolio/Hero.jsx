function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag">MaqaTech Software Solutions</div>
          <h1>نصمم ونطور <span style={{color: 'var(--accent)'}}>حلولاً ذكية</span> لمستقبل رقمي أفضل.</h1>
          <p>
            أهلاً بك، أنا يوسف المقالح. مبرمج أنظمة ومواقع ويب، متخصص في تحويل الأفكار المعقدة إلى برمجيات سهلة الاستخدام وذات أداء احترافي.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">مشاهدة الأعمال</a>
            <a href="#contact" className="btn btn-outline">تواصل معي</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
