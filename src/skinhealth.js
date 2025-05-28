import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './skinhealth.css';

function Skinhealth() {
  const location = useLocation();

  // Scroll to anchor if URL has hash on load
  useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, [location]);

   return (
    <div className="App_getting_start">
      {/* Navbar */}
      <nav className="navbar background">
        <div className="logo">
          <img src="https://cbx-prod.b-cdn.net/COLOURBOX63612188.jpg?width=800&height=800&quality=70" alt="Logo" height="50" />
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
          <li><Link to="#">FAQ</Link></li>
        </ul>
        <div className="right-nav">
          <button className="btn btn-sm try-btn">Try DermaCare</button>
        </div>
      </nav>

   {/* Main Content */}
      <main>
        <section className="hero-section">
          <div className="hero-text">
            <h2 className="tittle">Curious about skin health? <br /> Discover the answers here.</h2>
          </div>
          <img src="https://medigy.com/offering/17130.JPEG" alt="Skin health banner" className="section-image" />
        </section>

        <section className="hero-section">
          <div className="hero-text">
            <h3 className="tittle1">Discover Your Skin Type</h3>
            <h4 className="tittle2">Curious about your skin type?</h4>
            <p className="subtittle">
              Your skin type plays a key role in determining your likelihood of developing certain skin conditions,
              including skin cancer. Our app helps you pinpoint your skin type so you can receive tailored guidance,
              protection strategies, and personalized care recommendations.
            </p>
          </div>
          <img src="https://apulparikh.co.uk/wp-content/uploads/2024/09/Skin-Lesions-Moles-London-300x204.png" alt="Skin type analysis" className="section-image" />
        </section>

        <section className="info-section">
          <h2 className="highlight-title">Spots and Moles: What You Need to Know</h2>
          <p><strong>Not all moles are the same.</strong></p>
          <p>Mole shape, size, and color can reveal early clues about your skin health. Use our AI-powered tool for accurate assessments.</p>
          <p><strong>What is a mole?</strong> A mole is a cluster of melanocytes—pigment-producing skin cells. They may appear due to sun exposure or be congenital.</p>
          <p>Most are harmless, but regular self-checks help detect changes early.</p>
        </section>

        <section className="types-section">
          <h2 className="highlight-subtitle">Types of Skin Moles</h2>
          <ul>
            <li><strong>Common Moles:</strong> Small, round, dome-shaped, rarely cancerous.</li>
            <li><strong>Atypical Moles:</strong> Irregular shape, varying color. Monitor closely.</li>
            <li><strong>Congenital Moles:</strong> From birth. Large ones carry more risk.</li>
            <li><strong>Acquired Moles:</strong> Appear after birth. Common, but should be tracked.</li>
            <li><strong>Junctional Nevi:</strong> Flat, dark, defined borders. Common in youth.</li>
            <li><strong>Intradermal Nevi:</strong> Flesh-colored, appear later in life.</li>
            <li><strong>Compound Nevi:</strong> Raised center, flat edges, even color.</li>
            <li><strong>Halo Nevi:</strong> Surrounded by a pale ring. Often immune-related.</li>
          </ul>
        </section>

        {/* Updated Two-Column Layout Section */}
        <section className="safe-warning-section">
          <div className="two-col-block">
            <div className="text-block">
              <h2>How to Know If a Mole Is Safe</h2>
              <ul>
                <li>Clear borders</li>
                <li>Symmetrical shape</li>
                <li>Consistent color</li>
                <li>Diameter under 6 mm</li>
                <li>No change over time</li>
              </ul>
            </div>
            <div className="image-block">
              <img src="https://www.cigna.com.hk/iwov-resources/smarthealth/images/skin-cancer-causes-types-symptoms-diagnosis_mobile.jpg" alt="Safe mole example" />
            </div>
          </div>

          <div className="two-col-block">
            <div className="image-block">
              <img src="https://magazineclonerepub.imgix.net/916/265024/image/126964fd-aa7b-4edb-ab00-9286937bc245.jpg" alt="Warning mole example" />
            </div>
            <div className="text-block">
              <h2>Signs That Could Indicate Skin Cancer</h2>
              <ul>
                <li>Rapid growth</li>
                <li>Irregular shape or jagged edges</li>
                <li>Color darkening or multiple tones</li>
                <li>Bleeding, crusting, or itching</li>
                <li>Inflamed or raised border</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="abcde-rule">
          <h2>Use the ABCDE Rule</h2>
          <p><em>Dermatologists use this guide to identify suspicious moles:</em></p>
          <ul>
            <li><strong>A – Asymmetry:</strong> One side doesn't match the other</li>
            <li><strong>B – Border:</strong> Irregular or uneven edges</li>
            <li><strong>C – Color:</strong> Two or more colors present</li>
            <li><strong>D – Diameter:</strong> Greater than 6 mm</li>
            <li><strong>E – Evolving:</strong> Changes in size, color, or shape</li>
          </ul>
          <img src="https://www.sunwaymedicalvelocity.com.my/images/uploads/editor/product/1615465595125311.jpg" alt="ABCDE melanoma detection visual" className="section-image" />
        </section>

        <section className="section">
          <h3>What does skin cancer look like?</h3>
          <p><strong>Asymmetry:</strong> A mole that’s uneven should be examined.</p>
          <p><strong>Border & Color:</strong> Irregular edges and color variations are warning signs.</p>
          <p><strong>Evolution:</strong> Any change over time means it should be checked.</p>
        </section>

        <section className="section">
          <h3>Where does skin cancer appear most often?</h3>
          <p>
            Skin cancer can appear anywhere, but most often in high sun exposure areas such as the face, neck, arms, back.
            Ask someone to help check hard-to-see areas.
          </p>
        </section>
      </main>

      {/* ===== Footer ===== */}
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

export default Skinhealth;
