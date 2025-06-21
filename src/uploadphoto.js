import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './uploadphoto.css';

function UploadPhoto() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraSectionRef = useRef(null);
  const [stream, setStream] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setError(null);
    setResult(null);
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data);
    } catch (err) {
      setError('Prediction failed.');
    } finally {
      setLoading(false);
    }
  };

  const startCamera = () => {
    cameraSectionRef.current.style.display = 'block';
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((mediaStream) => {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      })
      .catch((err) => {
        setError('Unable to access camera.');
      });
  };

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      setFile(new File([blob], 'captured.png', { type: 'image/png' }));
    });
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
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
      <div className="uploadphoto-app-bg">
        <div className="upload-container">
          <h2>Submit Your Photo</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="photo-upload"
              style={{ display: 'none' }}
            />
            <label htmlFor="photo-upload" className="upload-btn">Choose File</label>
            <button type="button" className="upload-btn" onClick={startCamera}>Take Photo</button>
            <button type="submit" className="upload-btn" disabled={loading || !file}>
              {loading ? 'Uploading...' : 'Upload'}
            </button>
          </form>
          <div className="camera-section" ref={cameraSectionRef} style={{ display: 'none' }}>
            <video ref={videoRef} autoPlay playsInline id="video"></video>
            <button id="capture-btn" onClick={captureImage}>📸 Capture</button>
            <canvas ref={canvasRef} id="canvas" style={{ display: 'none' }}></canvas>
          </div>
          {error && <div style={{ color: 'red', marginTop: 10 }}>{error}</div>}
          {result && (
            <div style={{ marginTop: 20 }}>
              <h4>Prediction Result:</h4>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
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

export default UploadPhoto;
