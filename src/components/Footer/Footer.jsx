import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer ()  {
  return (
    <footer>

      <div className="footer-middle">
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="about">
          <h3>About CheckInnNow</h3>
          <p>Enjoy hassle-free booking with secure payment options and instant confirmations.</p>
          <a href="/about-us">Read More</a>
        </div>
        <div className="social-contact">
          <h3>Follow Us / Contact Us</h3>
          <div className="social-media">
            <a href="https://www.instagram.com/kemal.skrijelj/"><FaInstagram /></a>
            <a href="https://github.com/KemalSkrijelj"><FaGithub /></a>
            <a href="https://www.facebook.com/KemalSkrijeljKemo/"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/kemal-%C5%A1krijelj-b72785218/"><FaLinkedin /></a>
          </div>
          <p>Email: kemalskrijelj6@gmail.com</p>
          <p>Phone: +381-63-752-77-48</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CheckInnNow. All rights reserved.</p>
        <p>Designed and Developed by Kemal Skrijelj</p>
      </div>
    </footer>
  );
}

export default Footer;