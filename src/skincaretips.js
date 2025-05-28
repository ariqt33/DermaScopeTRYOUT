import React from 'react';
import { Link } from 'react-router-dom';
import './skincaretips.css';

function SkincareTips() {
  return (
    <div className="App_getting_start">
      {/* Navbar */}
      <nav className="navbar background">
        <div className="logo">
          <img
            src="https://cbx-prod.b-cdn.net/COLOURBOX63612188.jpg?width=800&height=800&quality=70"
            alt="Logo"
            height="50"
          />                                                                                                                                                                                                      
          <span className="logo-text">DermaScope Analyze & Consulting</span>
        </div>
        <ul className="nav-list">
          <li><Link to="/">Main</Link></li>
          <li className="has-dropdown">
            <Link to="/getting-started">Getting Started <span className="arrow">▼</span></Link>
            <ul className="dropdown">
              <li><Link to="/getting-started">Explore DermaScope</Link></li>
            </ul>
          </li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li className="has-dropdown">
            <span>Skin Health <span className="arrow">▼</span></span>
            <ul className="dropdown">
           <li><Link to="/skinhealth#skintypes">Find Skin Types</Link></li>
           <li><Link to="/skinhealth#moles">Skin Spot And Moles</Link></li>
           <li><Link to="/skinhealth#cancerinfo">Skin Cancer Info</Link></li>
           </ul>
          </li>
          <li className="has-dropdown">
            <span>Stories <span className="arrow">▼</span></span>
            <ul className="dropdown">
              <li><Link to="#">From Users</Link></li>
              <li><Link to="/skincaretips">Skincare Tips</Link></li>
            </ul>
          </li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>
        <div className="right-nav">
          <button className="btn btn-sm try-btn">Try DermaCare</button>
        </div>
      </nav>

      {/* Main Section */}
      <main>
        <div className="skincare-tips-section">
          <h1>Stories &gt; Skincare Tips</h1>

          <section className="tip-article">
            <img src="https://www.popsci.com/wp-content/uploads/2025/05/sunscreen-smile.png?w=2000" alt="Sunscreen" className="tip-img" />
            <div className="tip-content">
              <h2>Should you wear sunscreen?</h2>
              <p>If you follow health and wellness news, you have probably seen the building hype this year about sunscreen. Popular news outlets have been questioning if the ingredients in sunscreen pose health threats. One even questions whether sunscreen is the new margarine?</p>
              <Link to="#" className="learn-more-link" onClick={(e) => e.preventDefault()}>Learn More &gt;</Link>
            </div>
          </section>

          <section className="tip-article">
            <img src="https://www.health.com/thmb/l_GQqWhZWA5uFIVwcAxQwoW2-bY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SkincareOrder-d41e059245db42b39e16e2c516c7bd09.jpg" alt="Skincare Routine" className="tip-img" />
            <div className="tip-content">
              <h2>Do you follow any skincare routine?</h2>
              <p>Taking care of your skin is an essential part of maintaining overall health and confidence. A good skincare routine helps cleanse, hydrate, and protect your skin from daily stress and environmental damage.</p>
              <Link to="#" className="learn-more-link" onClick={(e) => e.preventDefault()}>Learn More &gt;</Link>
            </div>
          </section>

          <section className="tip-article">
            <img src="https://mydoctor.kaiserpermanente.org/mas/Images/thumbnail_large_blog-skin-friendly-diet-1_tcm88-2720237.jpg" alt="Healthy Diet" className="tip-img" />
            <div className="tip-content">
              <h2>How does your diet affect your skin?</h2>
              <p>What you eat shows up on your skin! 🥑🍓 A balanced diet rich in antioxidants, vitamins, and water can make a visible difference. Learn how simple food choices can support a healthier, more radiant complexion.</p>
              <Link to="#" className="learn-more-link" onClick={(e) => e.preventDefault()}>Learn More &gt;</Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-newsletter">
          <h3>Stay Connected with DermaScope</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="#">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><Link to="#">Blogs</Link></li>
              <li><Link to="#">Podcasts</Link></li>
              <li><Link to="#">Stories</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>1237 Ocean Avenue, Charlotte, NC</li>
              <li>(888) 945-7266</li>
              <li><a href="mailto:mail.dermascope@gmail.com">mail.dermascope@gmail.com</a></li>
            </ul>
            <a href="#" className="footer-btn">Free Consultation</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DermaScope. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default SkincareTips;
