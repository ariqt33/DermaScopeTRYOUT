import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';

function Homepage() {
  return (
    <>
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
      <li><Link smooth to="/skinhealth#skintypes">Find Skin Types</Link></li>
      <li><Link smooth to="/skinhealth#moles">Skin Spot And Moles</Link></li>
      <li><Link smooth to="/skinhealth#cancerinfo">Skin Cancer Info</Link></li>
    </ul>
  </li>
  <li className="has-dropdown">
    <a href="#">Stories <span className="arrow">▼</span></a>
    <ul className="dropdown">
      <li><Link to="/userstories">From Users</Link></li>
      <li><Link to="/skincaretips">Skincare Tips</Link></li>
    </ul>
  </li>
  <li><Link to="/setting">Setting</Link></li>
  <li><Link to="/faq">FAQ</Link></li>
</ul>
 
    <div className="right-nav">
              <Link to="/uploadphoto">
                <button className="btn btn-sm try-btn">Try DermaCare</button>
              </Link>
            </div>
          </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Accurate skin disease detection made it simple.</h1>
          <p>Take care of your skin with confidence. Snap a photo to get quick, helpful info on common skin conditions.</p>
          <a className="check-btn" href="#">Check Your Skin Now</a>
        </div>
        <div className="hero-image">
          <img src="https://visagetechnologies.com/app/uploads/2023/08/how-face-recognition-works_Visage-Technologies.png" alt="Face detection preview" />
        </div>
      </section>

      {/* Features Section */}
<section className="features">
  <p className="tagline">
    We are building a global platform that connects customers, doctors, and insurers to optimize skin health.
  </p>
  <div className="feature-cards">
    <div className="card">
      <div className="card-image">
        <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRquwXhTz0r4at1iLDSon45xr3cNpQBlJJ3AY9OghSwLuxylUet" alt="Face detection preview" />
      </div>
      <h3>Skin Cancer is the most common cancer Worldwide</h3>
      <p>Skin cancer is more common than many realize. Around 1 in 5 people face skin cancer in their lives.</p>
      <a href="#">Learn More &gt;</a>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="https://img.freepik.com/premium-vector/drugs-vector-icon-design-illustration_1174953-39715.jpg" alt="Face detection preview" />
      </div>
      <h3>Leads to More Effective Care</h3>
      <p>Early identification directly results in better outcomes, reduced severity, and fewer complications.</p>
      <a href="#">Learn More &gt;</a>
    </div>

    <div className="card">
      <div className="card-image">
        <img src="https://assets-v2.lottiefiles.com/a/8c6945fa-117d-11ee-bf1b-f7195c7d29bc/ZJcTewn6N6.gif" alt="Face detection preview" />
      </div>
      <h3>Identifying Skin Changes Early Leads to More Effective Care</h3>
      <p>Instead of guessing, recognize and document any skin changes for early diagnosis and support.</p>
      <a href="#">Learn More &gt;</a>
    </div>
  </div>
</section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>See how DermaScope works</h2>
        <p>With over 90% accuracy, DermaCare is clinically validated, providing AI-assisted screening and user-friendly diagnosis tracking.</p>
        <img src="https://external-preview.redd.it/vtwEvubx3NC_P_EH2EL2W_efZVgm0jiv-g57dk6nEag.jpg?width=640&crop=smart&auto=webp&s=ce52d014cafdae385be4c3f7eedc6ed58006675c" alt="Illustration of skin analysis" />
        <Link className="check-btn" to="/uploadphoto">Check Now</Link>
      </section>

      {/* Customer Stories */}
      <section className="testimonials">
        <h2>DermaCare customer stories</h2>
        <div className="carousel">
          <div className="testimonial-card">
            <p>“I was able to get a diagnosis right from my phone! It saved me a lot of stress.”</p>
            <h4>- Anna Ridwan</h4>
          </div>
          <div className="testimonial-card">
            <p>“Very informative and easy to use. I love the simplicity.”</p>
            <h4>- Johan Malik</h4>
          </div>
          <div className="testimonial-card">
            <p>“DermaScope gave me the confidence to seek treatment early.”</p>
            <h4>- Sarah Kim</h4>
          </div>
        </div>
        <div className="carousel-indicators">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Why is DermaCare worth using?</h2>
        <div className="value-group">
          <div className="value-box">
            <div className="label">Smart</div>
            <img src="https://img.freepik.com/premium-vector/vector-design-smart-bulb-icon-style_1134108-139299.jpg" alt="Smart" />
          </div>
          <div className="value-connector"></div>
          <div className="value-box">
            <div className="label">Simple</div>
            <img src="https://ajahne.github.io/blog/assets/images/management-meeting-header.jpg" alt="Simple" />
          </div>
        </div>
        <div className="value-group">
          <div className="value-box">
            <div className="label">Accessible</div>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHp55K4RD1jIDXMXC0zvMx2smIqJNzB1MSeyjEulDeUYQluR_vw9s9XKRwV93ITgmtGHkPloeTCbrdd727Z8oXCxOputnWsVls46um0dPS8alnZvyHWsKT53EZyHntdeEXk6rhDVYw-Zo/s1600/Accessibility-Blog-Image-Android.png" alt="Accessible" />
          </div>
        </div>
        <div className="value-group">
          <div className="value-box">
            <div className="label">Affordable</div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeVd9JIgiLBTbPWJY8u5qHjEL-5kzX2dzVQ&s" alt="Affordable" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blogs</a></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/userstories">Stories</Link></li>
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
    </>
  );
}

export default Homepage; 
