import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './faq.css';

function FAQ() {
  const [activeAnswer, setActiveAnswer] = useState(null);

  const showAnswer = (id) => {
    setActiveAnswer(id);
  };

  const goBack = () => {
    setActiveAnswer(null);
  };

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
            <span>Stories <span className="arrow">▼</span></span>
            <ul className="dropdown">
              <li><a href="#">From Users</a></li>
              <li><Link to="/skincaretips">Skincare Tips</Link></li>
            </ul>
          </li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>

        <div className="right-nav">
          <button className="btn btn-sm try-btn">Try DermaCare</button>
        </div>
      </nav>

      {/* Main FAQ Section */}
      <div className="faq-wrapper">
        {!activeAnswer && (
          <section className="faq-section">
            <div className="faq-header">
              <span className="faq-icon">❓</span>
              <span className="faq-title">FAQ</span>
            </div>
            <h1 className="faq-heading">Have Questions?<br /><span>Get Answers</span></h1>

            <div className="faq-item" onClick={() => showAnswer('dermaCare')}>
              <p>What is DermaCare?</p>
            </div>

              <div className="faq-item" onClick={() => showAnswer('whatExperienceShouldISeekInAPersonalConsultant')}>
              <p>What experience should I seek in a personal consultant? </p>
            </div>

            <div className="faq-item" onClick={() => showAnswer('HowDoIChooseTheRightSkincareConsultantForMe')}>
            <p>How do I choose the right skincare consultant for me?</p>
            </div>

            <div className="faq-item" onClick={() => showAnswer('whoShouldUse')}>
            <p>Who should use DermaCare?</p>
            </div>
          </section>
        )}

        {activeAnswer === 'dermaCare' && (
          <section className="answer-section">
            <button onClick={goBack} className="back-button">← Back</button>
            <h2>What is DermaCare?</h2>
            <p>
              DermaCare is a mobile application powered by AI, created to aid in the early detection of common skin diseases through image analysis.
              Utilizing advanced deep learning techniques, DermaCare offers users preliminary evaluations based on clinically significant features,
              providing a quick and convenient way to support skin health monitoring.
            </p>
            <p>
              Designed with a strong emphasis on accuracy, ease of use, and accessibility, DermaCare is a valuable resource for both individuals and
              healthcare professionals, especially in areas where access to dermatological care is limited.
            </p>
          </section>
        )}

        {activeAnswer === 'whatExperienceShouldISeekInAPersonalConsultant' && (
          <section className="answer-section">
            <button onClick={goBack} className="back-button">← Back</button>
            <h2>What experience should I seek in a personal consultant?</h2>
            <p>
              DermaCare is suitable for a wide range of users, including individuals who want to monitor their skin health, those experiencing unfamiliar skin symptoms,
              and people living in areas with limited access to dermatologists.
            </p>
            <p>
              Additionally, healthcare professionals can use DermaCare as a supporting tool to quickly assess patient skin conditions and recommend follow-up care
              when needed.
            </p>
          </section>
        )}

         {activeAnswer === 'HowDoIChooseTheRightSkincareConsultantForMe' && (
          <section className="answer-section">
            <button onClick={goBack} className="back-button">← Back</button>
            <h2>How do I choose the right skincare consultant for me?</h2>
            <p>
             Finding the right skincare consultant is about more than just credentials—it's about connection and understanding. 
             Start by researching their background, reading client reviews, and checking whether they specialize in the type of skin concern you’re facing, such as acne, pigmentation, or aging. 
             During your first consultation, pay attention to how they communicate: do they listen carefully, ask thoughtful questions, and tailor their suggestions to your unique skin type and goals?
            </p>
            <p>
              A great consultant will never push products just for the sake of sales—they’ll offer honest advice, explain why certain treatments or routines are recommended, and support you on your skincare journey. 
              Trust, comfort, and clarity are essential indicators that you’ve found the right fit.
            </p>
          </section>
        )}

        {activeAnswer === 'whoShouldUse' && (
          <section className="answer-section">
            <button onClick={goBack} className="back-button">← Back</button>
            <h2>Who should use DermaCare?</h2>
            <p>
             A well-qualified skincare consultant should possess formal education or certification in dermatology, esthetics, or cosmetology. This ensures they have a foundational understanding of skin biology, conditions, and treatments.
              Beyond academic qualifications, hands-on experience is equally important—especially with clients who have diverse skin types, tones, and concerns.
            </p>
            <p>
               A good consultant stays updated with the latest skincare trends, ingredients, and technologies through continuous learning or industry workshops. 
               Additionally, soft skills such as empathy, active listening, and clear communication are vital, as a consultant must be able to understand your needs and explain recommendations in a way that makes sense and builds trust.
            </p>
          </section>
        )}
      </div>

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
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Podcasts</a></li>
              <li><a href="#">Stories</a></li>
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

export default FAQ;
