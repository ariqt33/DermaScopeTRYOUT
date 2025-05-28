import React, { useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './uploadphoto.css';
import bgImage from './assets/bg1.png'; // ✅ Replace with your actual image path

function UploadPhoto() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraSectionRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [stream, setStream] = useState(null);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
    alert('File selected: ' + e.target.files[0].name);
  };

  const startCamera = () => {
    cameraSectionRef.current.style.display = 'block';
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      })
      .catch((err) => {
        console.error('Webcam access error:', err);
        alert('Unable to access camera.');
      });
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    alert('Image captured!');

    // Optional: stop camera stream after capture
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
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
              <li><a href="#">From Users</a></li>
              <li><Link to="/skincaretips">Skincare Tips</Link></li>
            </ul>
          </li>
          <li><Link to="/faq">FAQ</Link></li>
        </ul>

        <div className="right-nav">
          <Link to="/uploadphoto">
            <button className="btn btn-sm try-btn">Try DermaCare</button>
          </Link>
        </div>
      </nav>

      {/* Upload Section */}
      <section className="upload-section">
        <div className="upload-container">
          <h2>Submit Your Photo</h2>
          <p>Select a photo or take one using your camera.</p>

          <div className="button-group">
            {/* Hidden file input + styled label */}
            <input
              type="file"
              id="photo-upload"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
            <label htmlFor="photo-upload" className="upload-btn">Choose File</label>

            {/* Take Photo Button */}
            <button className="upload-btn" onClick={startCamera}>Take Photo</button>
          </div>

          {/* Camera Section */}
          <div className="camera-section" ref={cameraSectionRef} style={{ display: 'none' }}>
            <video ref={videoRef} autoPlay playsInline id="video"></video>
            <button id="capture-btn" onClick={captureImage}>📸 Capture</button>
            <canvas ref={canvasRef} id="canvas" style={{ display: 'none' }}></canvas>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-newsletter">
          <h3>Latest News from</h3>
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
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
    </div>
  );
}

export default UploadPhoto;
