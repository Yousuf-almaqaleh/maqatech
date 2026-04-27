import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart, addToCart }) {
  const total = cart.reduce((acc, item) => {
    // Remove formatting like commas and currency text to calculate
    const price = parseInt(item.price.replace(/[^\d]/g, ''));
    return acc + price;
  }, 0);

  const otherProducts = [
    { id: 4, name: 'سماعات لاسلكية', price: '25,000 ر.ي', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80' },
    { id: 5, name: 'كاميرا احترافية', price: '450,000 ر.ي', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="cart-page" dir="rtl">
      <h1>سلة المشتريات</h1>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>سلتك فارغة حالياً</p>
          <Link to="/" className="back-btn">العودة للتسوق</Link>
        </div>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(index)}
                >
                  حذف
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <h2>ملخص الطلب</h2>
            <div className="summary-row">
              <span>إجمالي المنتجات:</span>
              <span>{cart.length}</span>
            </div>
            <div className="summary-row total">
              <span>الإجمالي الكلي:</span>
              <span>{total.toLocaleString()} ر.ي</span>
            </div>
            <button className="checkout-btn">إتمام عملية الشراء</button>
          </div>
        </div>
      )}

      {/* Other Products Section */}
      <div className="other-products-section">
        <h2 className="section-title">منتجات أخرى</h2>
        <div className="products">
          {otherProducts.map(product => (
            <div key={product.id} className="card-wrapper">
              <Link to={`/product/${product.id}`}>
                <div className="card">
                  <div>
                    <img src={product.img} alt={product.name} />
                  </div>
                  <h1>{product.name}</h1>
                  <p>السعر: {product.price}</p>
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
    </div>
  );
}

export default Cart;
