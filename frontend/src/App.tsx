import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const GOOGLE_FORM_URL = 'https://forms.gle/UDF98KRQ3kVcXgrDA';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="logo" onClick={() => scrollToSection('hero')}>
            Filmy <span>feat</span>
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#prizes" onClick={(e) => { e.preventDefault(); scrollToSection('prizes'); }}>Prizes</a></li>
            <li><a href="#registration" onClick={(e) => { e.preventDefault(); scrollToSection('registration'); }}>Register</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
          </ul>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p className="hero-subtitle" variants={fadeInUp}>
            Welcome to the
          </motion.p>
          <motion.h1 className="hero-title" variants={fadeInUp}>
            Filmy <span>feat</span>
          </motion.h1>
          <motion.p className="hero-date" variants={fadeInUp}>
            Film Festival 2026
          </motion.p>
          <motion.div className="hero-cta" variants={fadeInUp}>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Register Now - FREE
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('about')}
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">Discover</span>
            <h2 className="section-title">ABOUT THE FESTIVAL</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.p
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            Filmy feat Film Festival celebrates the art of cinema, bringing together
            filmmakers, artists, and cinema enthusiasts from around the world. Our
            festival showcases diverse stories, innovative filmmaking techniques, and
            provides a platform for emerging talent to shine.
          </motion.p>

          <motion.div
            className="about-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-icon">🎬</div>
              <h3>Film Screenings</h3>
              <p>
                Experience a curated selection of feature films, documentaries,
                and short films from talented filmmakers worldwide.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-icon">🏆</div>
              <h3>Awards & Recognition</h3>
              <p>
                Compete for prestigious awards with cash prizes up to ₹20,000
                and gain recognition for your creative work.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-icon">🤝</div>
              <h3>Networking</h3>
              <p>
                Connect with industry professionals, fellow filmmakers, and
                potential collaborators at our networking events.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="prizes">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">Win Big</span>
            <h2 className="section-title">PRIZES & AWARDS</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.div
            className="prizes-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="prize-card prize-gold" variants={fadeInUp}>
              <div className="prize-icon">👑</div>
              <h3>Best Female Director</h3>
              <div className="prize-amount">₹20,000</div>
              <p>Celebrating exceptional female talent in direction</p>
            </motion.div>

            <motion.div className="prize-card prize-silver" variants={fadeInUp}>
              <div className="prize-icon">🎬</div>
              <h3>Best Male Director</h3>
              <div className="prize-amount">₹15,000</div>
              <p>Honoring outstanding male directorial vision</p>
            </motion.div>

            <motion.div className="prize-card prize-bronze" variants={fadeInUp}>
              <div className="prize-icon">🎥</div>
              <h3>Best Film</h3>
              <div className="prize-amount">₹10,000</div>
              <p>Recognizing overall cinematic excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="registration">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">Join Us</span>
            <h2 className="section-title">REGISTRATION</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.p
            className="registration-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '50px' }}
          >
            Choose your registration period - Early bird gets FREE entry!
          </motion.p>

          <motion.div
            className="pricing-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="pricing-card pricing-free" variants={fadeInUp}>
              <div className="pricing-badge">Early Bird</div>
              <h3>FREE</h3>
              <div className="pricing-period">13 Feb - 30 Jul 2026</div>
              <ul className="pricing-features">
                <li>✓ Film Submission</li>
                <li>✓ Festival Access</li>
                <li>✓ Award Eligibility</li>
                <li>✓ Certificate</li>
              </ul>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn pricing-btn"
              >
                Register Free
              </a>
            </motion.div>

            <motion.div className="pricing-card" variants={fadeInUp}>
              <h3>₹99</h3>
              <div className="pricing-period">31 Jul - 30 Sep 2026</div>
              <ul className="pricing-features">
                <li>✓ Film Submission</li>
                <li>✓ Festival Access</li>
                <li>✓ Award Eligibility</li>
                <li>✓ Certificate</li>
              </ul>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn pricing-btn"
              >
                Register Now
              </a>
            </motion.div>

            <motion.div className="pricing-card" variants={fadeInUp}>
              <h3>₹299</h3>
              <div className="pricing-period">1 Oct - 31 Oct 2026</div>
              <ul className="pricing-features">
                <li>✓ Film Submission</li>
                <li>✓ Festival Access</li>
                <li>✓ Award Eligibility</li>
                <li>✓ Certificate</li>
              </ul>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn pricing-btn"
              >
                Register Now
              </a>
            </motion.div>

            <motion.div className="pricing-card pricing-last" variants={fadeInUp}>
              <div className="pricing-badge-last">Final Call</div>
              <h3>₹499</h3>
              <div className="pricing-period">1 Nov - 20 Nov 2026</div>
              <ul className="pricing-features">
                <li>✓ Film Submission</li>
                <li>✓ Festival Access</li>
                <li>✓ Award Eligibility</li>
                <li>✓ Certificate</li>
              </ul>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn pricing-btn"
              >
                Register Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">Get in Touch</span>
            <h2 className="section-title">CONTACT US</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.div
            className="contact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="contact-card" variants={fadeInUp}>
              <div className="contact-icon">📧</div>
              <h3>Email Us</h3>
              <p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=filmyfeatofficial@gmail.com" target="_blank" rel="noopener noreferrer">filmyfeatofficial@gmail.com</a>
              </p>
              <p>We'll respond within 24 hours</p>
            </motion.div>

            <motion.div className="contact-card" variants={fadeInUp}>
              <div className="contact-icon">📱</div>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/919703304824" target="_blank" rel="noopener noreferrer">
                  +91 97033 04824
                </a>
              </p>
              <p>Chat with us directly</p>
            </motion.div>

            <motion.div className="contact-card" variants={fadeInUp}>
              <div className="contact-icon">📝</div>
              <h3>Register</h3>
              <p>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Google Form
                </a>
              </p>
              <p>Submit your film today</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              Filmy <span>feat</span>
            </div>

            <div className="footer-social">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=filmyfeatofficial@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">@</a>
              <a href="https://wa.me/919703304824" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">W</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Filmy feat Film Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
