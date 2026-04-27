import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

function App() {
    const [cart, setCart] = useState([])
    const [toast, setToast] = useState({ show: false, message: '' })

    const addToCart = (product) => {
        setCart([...cart, product])
        showToast(`تم إضافة ${product.name} إلى السلة!`)
    }

    const removeFromCart = (index) => {
        const newCart = [...cart]
        const removedItem = newCart.splice(index, 1)
        setCart(newCart)
        showToast(`تم حذف ${removedItem[0].name} من السلة`)
    }

    const showToast = (message) => {
        setToast({ show: true, message })
        setTimeout(() => {
            setToast({ show: false, message: '' })
        }, 3000)
    }

    return (
        <div>
            {toast.show && (
                <div className="toast-notification">
                    <div className="toast-content">
                        <span className="toast-icon">✅</span>
                        <p>{toast.message}</p>
                    </div>
                </div>
            )}

            <nav className="main-nav">
                <div className="nav-container">
                    <div className="logo">متجر اليمن التقني</div>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">الرئيسية</Link>
                        <Link to="/about" className="nav-link">من نحن</Link>
                        <Link to="/contact" className="nav-link">تواصل معنا</Link>
                    </div>
                    <div className="nav-actions">
                        <Link to="/cart" className="cart-btn">
                            🛒 السلة <span>({cart.length})</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home addToCart={addToCart} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />} />
            </Routes>
            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>متجر اليمن التقني</h3>
                        <p>وجهتك الأولى لأحدث الأجهزة الذكية والتقنيات المتطورة في اليمن.</p>
                    </div>
                    <div className="footer-section">
                        <h4>روابط سريعة</h4>
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/about">من نحن</Link></li>
                            <li><Link to="/contact">تواصل معنا</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>تواصل معنا</h4>
                        <p>📍 صنعاء، اليمن</p>
                        <p>📞 +967 777 777 777</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} متجر اليمن التقني</p>
                </div>
            </footer>
        </div>
    )
}

export default App