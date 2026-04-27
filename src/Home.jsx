import { Link } from 'react-router-dom';

function Home({ addToCart }) {
  const products = [
    { id: 1, name: 'لابتوب احترافي', price: '500,000 ر.ي', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80' },
    { id: 2, name: 'هاتف ذكي حديث', price: '300,000 ر.ي', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80' },
    { id: 3, name: 'ساعة ذكية أنيقة', price: '50,000 ر.ي', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="home-page" dir="rtl">
      {/* Ads Banner Section */}
      <section className="ads-banner">
        <div className="ads-content">
          <span className="badge">عرض لفترة محدودة</span>
          <h1>أحدث التقنيات بين يديك</h1>
          <p>اكتشف تشكيلتنا الواسعة من الأجهزة الذكية بأسعار تنافسية وضمان حقيقي.</p>
          <div className="ads-btns">
            <button className="primary-btn">تسوق الآن</button>
            <button className="secondary-btn">شاهد العروض</button>
          </div>
        </div>
        <div className="ads-image">
          <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=800&q=80" alt="Special Offer" />
        </div>
      </section>

      <div className="section-header">
        <h2>منتجاتنا المميزة</h2>
        <div className="line"></div>
      </div>

      <div className='products'>
        {products.map(product => (
          <div key={product.id} className="card-wrapper">
            <Link to={`/product/${product.id}`}>
              <div className="card">
                <div className="img-container">
                  <img src={product.img} alt={product.name} />
                </div>
                <h1>{product.name}</h1>
                <p className="price">{product.price}</p>
              </div>
            </Link>
            <button 
              className="add-to-cart-btn-small" 
              onClick={() => addToCart(product)}
            >
              إضافة للسلة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;