import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  
  // بيانات المنتجات (يمكن نقلها إلى ملف منفصل لاحقاً)
  const products = [
    { 
      id: 1, 
      name: 'لابتوب احترافي', 
      price: '500,000 ر.ي', 
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
      description: 'لابتوب عالي الأداء مناسب للمصممين والمبرمجين، يتميز بشاشة بدقة عالية وبطارية تدوم طويلاً.'
    },
    { 
      id: 2, 
      name: 'هاتف ذكي حديث', 
      price: '300,000 ر.ي', 
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      description: 'أحدث هاتف ذكي بكاميرا احترافية وشاشة أموليد سريعة الاستجابة.'
    },
    { 
      id: 3, 
      name: 'ساعة ذكية أنيقة', 
      price: '50,000 ر.ي', 
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      description: 'ساعة ذكية تتابع صحتك ولياقتك البدنية بتصميم عصري يناسب جميع المناسبات.'
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="error-page" dir="rtl">
        <h2>عذراً، المنتج غير موجود</h2>
        <Link to="/" className="back-btn">العودة للرئيسية</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page" dir="rtl">
      <div className="detail-container">
        <div className="product-visual">
          <img src={product.img} alt={product.name} className="main-img" />
        </div>
        
        <div className="product-info-panel">
          <Link to="/" className="breadcrumb-back">← العودة للتسوق</Link>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          
          <div className="product-description">
            <h3>الوصف</h3>
            <p>{product.description}</p>
          </div>

          <div className="purchase-actions">
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>إضافة للسلة</button>
            <button className="wishlist-btn">♡</button>
          </div>

          <div className="product-features">
            <div className="feature">✓ شحن سريع</div>
            <div className="feature">✓ ضمان لمدة سنتين</div>
            <div className="feature">✓ استرجاع مجاني</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
