import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './index.css';

const BASE_URL = import.meta.env.BASE_URL;

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfJLgPGlE0Ek3fjSDuJqKTJNcy8VLCF3YLsY3URGJCC6CpzWQ/viewform?usp=header';

const VIDEOS = [
  { id: 'gDIy2HgC7W8', title: 'Featured Short Film', lang: 'All' },
  { id: 'FIz_z1wtfUE', title: 'EGO - Tamil Thriller Short Film 4K', lang: 'Tamil' },
  { id: 'ww7b8xgqyrQ', title: 'WATER | Tamil Short Film', lang: 'Tamil' },
  { id: 'CUMhD_iZ5Uo', title: 'DECISION | Tamil Short Film', lang: 'Tamil' },
  { id: 'dz9SFTdbQ9A', title: 'NISHA (నిషా) - Telugu Thriller Short Film 4K', lang: 'Telugu' },
  { id: 'a1ZafysdeKs', title: 'MESSAGE | A Telugu Thriller Short Film', lang: 'Telugu' },
  { id: 'uvGdmP8PuPU', title: 'YAMUDU - Telugu Short Film 4K', lang: 'Telugu' },
];

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoFilter, setVideoFilter] = useState('All');
  const [showTerms, setShowTerms] = useState(false);

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
            <img src={`${BASE_URL}filmy-feat-nav-logo.jpeg`} alt="FilmyFeat Logo" className="nav-logo-img" />
            <span className="logo-text">FILMY <span>FEAT</span></span>
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#prizes" onClick={(e) => { e.preventDefault(); scrollToSection('prizes'); }}>Prizes</a></li>
            <li><a href="#videos" onClick={(e) => { e.preventDefault(); scrollToSection('videos'); }}>Curator's Cut</a></li>
            <li><a href="#terms" onClick={(e) => { e.preventDefault(); scrollToSection('terms'); }}>Guidelines</a></li>
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
      <section id="hero" className="hero" style={{ '--hero-bg': `url(${BASE_URL}hero-background.jpeg)` } as React.CSSProperties}>
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
          <motion.p className="hero-tagline" variants={fadeInUp}>
            Crafting Frames, Creating Futures
          </motion.p>
          <motion.div className="hero-cta" variants={fadeInUp}>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Register Now
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
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="about-header-left" variants={fadeInUp}>
              <h2 className="about-section-title">ABOUT FILMYFEAT</h2>
              <div className="about-title-line"></div>
            </motion.div>


            <motion.div className="about-body-wrapper" variants={fadeInUp}>
              <div className="about-text-column">
                <p className="about-text">
                  FilmyFeat is a Pan-India short film festival created to support and showcase emerging filmmakers and original storytelling. We provide a professional platform for short films to be screened offline, recognized through awards, and celebrated by a wider creative community.
                </p>
                <p className="about-text">
                  Our festival welcomes films from all Indian languages, encouraging diversity, inclusivity, and bold cinematic voices, with English subtitles ensuring accessibility for all audiences. FilmyFeat is not just about competition — it is about connection, learning, and growth.
                </p>
                <p className="about-text">
                  Through screenings, awards, and networking opportunities, FilmyFeat aims to inspire collaboration and empower the next generation of filmmakers, helping them take confident steps into the world of Indian cinema.
                </p>
                <p className="about-text">
                  FilmyFeat has been crafted to be one of the key platforms for emerging cinema and aims to herald new cinematic trends — the way films are made, the way films are recognized, and the way films connect with audiences.
                </p>
              </div>
              <div className="about-logo-column">
                <img
                  src={`${BASE_URL}filmy-feat-about-logo.jpeg`}
                  alt="FilmyFeat Logo"
                  className="about-logo-side"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-divider"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          />

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
                FilmyFeat showcases a carefully curated selection of Pan-India short films through offline theatrical screenings. Films from diverse languages, genres, and cultures are presented on the big screen, creating an immersive cinematic experience for filmmakers and audiences alike. English subtitles ensure accessibility for all.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-icon">🏆</div>
              <h3>Awards & Recognition</h3>
              <p>
                FilmyFeat celebrates excellence in storytelling and filmmaking through cash prizes, official laurels, and digital recognition. Selected and winning films gain visibility on FilmyFeat platforms, honoring both female and male directors while encouraging creative excellence and independent voices.
              </p>
            </motion.div>

            <motion.div className="about-card" variants={fadeInUp}>
              <div className="about-icon">🤝</div>
              <h3>Networking & Community</h3>
              <p>
                FilmyFeat brings together filmmakers, artists, students, and cinema lovers under one roof. The festival creates opportunities for meaningful conversations, collaborations, and creative connections, helping filmmakers grow beyond the screen.
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

      {/* Certificates & Trophies Section */}
      <section id="certificates" className="certificates">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">Recognition</span>
            <h2 className="section-title">CERTIFICATES & TROPHIES</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.div
            className="cert-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: '🎬', title: '2nd Best Short Film' },
              { icon: '🎭', title: 'Best Actor' },
              { icon: '🌟', title: 'Best Actress' },
              { icon: '✍️', title: 'Best Story Writer' },
              { icon: '📷', title: 'Best Cinematographer' },
              { icon: '📜', title: 'Best Screenplay' },
              { icon: '✂️', title: 'Best Editor' },
              { icon: '🎵', title: 'Best Music / Original Score' },
              { icon: '🎞️', title: 'Best Producer / Production' },
              { icon: '💥', title: 'Best SFX' },
              { icon: '💬', title: 'Best Dialogue' },
              { icon: '🎨', title: 'Best Title Design or Poster Design' },
              { icon: '👏', title: 'Best Short Film (Public Choice / Audience Award)' },
              { icon: '🖥️', title: 'Best VFX / CGI (if allowed)' },
              { icon: '💄', title: 'Best Makeup & Costume Design' },
              { icon: '🔥', title: 'Best Viral / Highest View Short Film Award' },
              { icon: '🌈', title: 'Best Color Grading / DI' },
            ].map((award) => (
              <motion.div className="cert-card" key={award.title} variants={fadeInUp}>
                <div className="cert-icon">{award.icon}</div>
                <h3>{award.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="videos">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">Watch</span>
            <div className="video-header-row">
              <h2 className="section-title">CURATOR'S CUT</h2>
              <a
                href="https://www.youtube.com/@filmyfeat-d2t"
                target="_blank"
                rel="noopener noreferrer"
                className="video-yt-link"
                aria-label="FilmyFeat YouTube Channel"
              >
                <svg viewBox="0 0 24 24" fill="#FF0000" width="32" height="32">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <div className="section-line"></div>
          </motion.div>

          <div className="video-filters">
            {['All', 'Tamil', 'Telugu'].map((filter) => (
              <button
                key={filter}
                className={`video-filter-btn ${videoFilter === filter ? 'active' : ''}`}
                onClick={() => setVideoFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <motion.div
            key={videoFilter}
            className="video-grid"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {VIDEOS
              .filter((v) => videoFilter === 'All' || v.lang === videoFilter)
              .map((video) => (
                <motion.a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-card"
                  variants={fadeInUp}
                >
                  <div className="video-thumb">
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                    />
                    <div className="video-play-btn">
                      <svg viewBox="0 0 24 24" fill="#fff" width="48" height="48">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="video-title">{video.title}</h3>
                  <span className="video-lang-tag">{video.lang}</span>
                </motion.a>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Terms & Conditions Section */}
      <section id="terms" className="terms-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="section-tag">Read Before Submitting</span>
            <h2 className="section-title">GUIDELINES</h2>
            <div className="section-line"></div>
          </motion.div>

          <motion.div
            className="terms-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="terms-card" variants={fadeInUp}>
              <h3>1. Eligibility</h3>
              <ul>
                <li>Filmmaker or director must be aged 15 years or above</li>
                <li>Short films must be between 1 and 20 minutes (including credits)</li>
                <li>Films may be in any Indian language or English with mandatory English subtitles</li>
                <li>Documentaries, AI-generated films, and animated films are not accepted</li>
              </ul>
            </motion.div>

            <motion.div className="terms-card" variants={fadeInUp}>
              <h3>2. Submission & Rights</h3>
              <ul>
                <li>Submitter must own all rights to the film (music, SFX, VFX, etc.)</li>
                <li>Submission cannot be withdrawn after registration</li>
                <li>Same film must not be registered more than once</li>
                <li>Film must not be uploaded to YouTube or any streaming platform</li>
              </ul>
            </motion.div>

            <motion.div className="terms-card" variants={fadeInUp}>
              <h3>3. Registration Fees</h3>
              <ul>
                <li>Free: 13 Feb - 30 Jul 2026</li>
                <li>₹99: 31 Jul - 30 Sep 2026</li>
                <li>₹299: 1 Oct - 31 Oct 2026</li>
                <li>₹499: 1 Nov - 20 Nov 2026</li>
                <li>All fees are non-refundable</li>
              </ul>
            </motion.div>

            <motion.div className="terms-card" variants={fadeInUp}>
              <h3>4. Content Guidelines</h3>
              <ul>
                <li>Films may be of any genre</li>
                <li>Avoid excessive violence, alcohol/cigarette consumption, content supporting illegal activities</li>
                <li>Must adhere to YouTube's terms of service and community guidelines</li>
              </ul>
            </motion.div>

            <motion.div className="terms-card" variants={fadeInUp}>
              <h3>5. Judging Criteria</h3>
              <ul>
                <li>Content Originality — storyline, screenplay, script</li>
                <li>Production — camera work, lighting, shot composition</li>
                <li>Post-Production — editing, transitions, pacing, flow</li>
                <li>Image — focus, color, lighting quality</li>
              </ul>
            </motion.div>

            <motion.div className="terms-card" variants={fadeInUp}>
              <h3>6. Selection & Awards</h3>
              <ul>
                <li>Nominations announced on 1 December 2026</li>
                <li>Final winners announced at offline ceremony in Chennai on 20 December 2026</li>
                <li>Certificates provided to officially selected participants only</li>
                <li>Decision of jury and committee is final</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="terms-download-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <a href={`${BASE_URL}filmy-feat-terms.pdf`} download className="btn btn-primary">
              Download Full Terms (PDF)
            </a>
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

          <motion.p
            className="terms-note"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <strong>For free entry participants only:</strong><br />
            Upload the payment screenshot section by paying zero/minimum rupees or messages. If payment screenshot is not possible, you may share Filmy Feat Film Festival posters from our social media.
          </motion.p>
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
              <div className="contact-icon gmail-icon">
                <svg viewBox="0 0 48 48" width="40" height="40">
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
                  <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
                  <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
                  <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
                  <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=filmyfeatofficial@gmail.com" target="_blank" rel="noopener noreferrer">filmyfeatofficial@gmail.com</a>
              </p>
              <p>We'll respond as early as possible</p>
            </motion.div>

            <motion.div className="contact-card" variants={fadeInUp}>
              <div className="contact-icon whatsapp-icon">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <p>
                <a href="https://wa.me/919703304824" target="_blank" rel="noopener noreferrer">
                  +91 97033 04824
                </a>
              </p>
              <p>Chat with us directly</p>
            </motion.div>

            <motion.div className="contact-card" variants={fadeInUp}>
              <div className="contact-icon register-icon">
                <svg viewBox="0 0 48 48" width="36" height="36">
                  <path fill="#2196F3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
                  <path fill="#BBDEFB" d="M40,13H30V3L40,13z"/>
                  <path fill="#1565C0" d="M30 13L40 23 40 13z"/>
                  <path fill="#E3F2FD" d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"/>
                </svg>
              </div>
              <h3>Register</h3>
              <p>
                <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Google Form
                </a>
              </p>
              <p>Submit your film today</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="social-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <h3 className="social-heading">Follow Us</h3>
            <div className="social-icons">
              <motion.a
                href="https://www.instagram.com/_filmy_feat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
                variants={fadeInUp}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://www.facebook.com/share/1CttjRBhye"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
                variants={fadeInUp}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://www.threads.com/@_filmy_feat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="social-icon"
                variants={fadeInUp}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.781 3.632 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.289 3.272-.86 1.065-2.058 1.696-3.559 1.876-1.116.134-2.225-.015-3.12-.42-1.014-.46-1.71-1.22-1.958-2.14-.352-1.3.106-2.7 1.22-3.726.895-.824 2.139-1.381 3.582-1.614.87-.14 1.751-.148 2.611-.024.195-.637.288-1.32.288-2.042 0-.774-.096-1.42-.288-1.94-.408-1.116-1.283-1.683-2.6-1.683h-.063c-.94.018-1.71.336-2.29.947l-1.414-1.414c.906-.953 2.1-1.46 3.45-1.533h.2c1.98 0 3.49.797 4.253 2.24.44.834.663 1.842.663 3.003 0 .617-.058 1.208-.169 1.766 1.167.524 2.103 1.32 2.72 2.328.84 1.372 1.058 3.072.604 4.712-.554 2.003-1.986 3.576-4.092 4.492C17.006 23.533 14.822 24 12.186 24zm-.09-7.076c-.147 0-.295.005-.444.019-.89.107-1.595.45-2.04.99-.449.548-.534 1.177-.37 1.782.142.527.504.906 1.048 1.098.594.21 1.328.27 2.007.17 1.59-.23 2.638-1.186 2.924-2.762-.957-.455-2.022-.69-3.032-.69-.03 0-.063 0-.093-.001v-.606z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://youtube.com/@filmyfeat-d2t"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="social-icon"
                variants={fadeInUp}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://x.com/filmy_feat"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="social-icon"
                variants={fadeInUp}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </motion.a>
            </div>
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
            <button className="footer-terms-link" onClick={() => setShowTerms(true)}>
              Terms & Conditions
            </button>
          </div>
        </div>
      </footer>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="terms-overlay" onClick={() => setShowTerms(false)}>
          <div className="terms-modal" onClick={(e) => e.stopPropagation()}>
            <button className="terms-close" onClick={() => setShowTerms(false)}>
              &times;
            </button>
            <div className="terms-content">
              <h2>Terms & Conditions</h2>
              <p className="terms-subtitle">FilmyFeat Film Festival — 2026 Edition</p>

              <h3>1. Eligibility</h3>
              <ul>
                <li>The filmmaker or director must be aged 15 years or above.</li>
                <li>Short films must be between 1 and 20 minutes in duration, including all credits.</li>
                <li>Films may be in any Indian language or English. English subtitles are mandatory.</li>
                <li>Non-dialogue films are accepted.</li>
                <li>Documentaries, AI-generated films, and animated films are not accepted.</li>
              </ul>

              <h3>2. Submission & Rights</h3>
              <ul>
                <li>By submitting a film, the filmmaker agrees to all FilmyFeat terms and conditions.</li>
                <li>The submitter must own all rights to the film, including music, SFX, VFX, DI, and all other elements.</li>
                <li>The submission form must be completed online with a Google Drive link or equivalent document link to the film.</li>
                <li>Films may be shot on any camera, including mobile devices, provided they support standard YouTube video formats.</li>
                <li>The submitter cannot withdraw the submission after registration.</li>
                <li>The same film must not be registered more than once. Multiple different films may be submitted.</li>
                <li>The submitted film must not be uploaded to YouTube or any other streaming platform, even after the final results are announced.</li>
                <li>No banner registration or censor certificate is required.</li>
              </ul>

              <h3>3. Registration Fees</h3>
              <ul>
                <li>Free — 13 February to 30 July 2026</li>
                <li>Early Bird — ₹99 — 31 July to 30 September 2026</li>
                <li>Regular — ₹299 — 1 October to 31 October 2026</li>
                <li>Late Entry — ₹499 — 1 November to 20 November 2026</li>
                <li>Entry fee: ₹100 per head (non-refundable).</li>
                <li>All registration fees are non-refundable under any circumstances.</li>
                <li>Upon registration, a confirmation message will be sent within 1–2 days and the filmmaker will be added to the official FilmyFeat WhatsApp group.</li>
              </ul>

              <h3>4. Content Guidelines</h3>
              <ul>
                <li>Films may be of any genre. However, filmmakers are advised to avoid excessive violence, alcohol or cigarette consumption, content supporting rape, pornography, drugs, politics, or any illegal activities.</li>
                <li>All films must adhere to YouTube's terms of service and community guidelines, as selected films will be uploaded on YouTube.</li>
              </ul>

              <h3>5. Judging Criteria</h3>
              <p>All films are judged equally based on the following criteria:</p>
              <ul>
                <li>Content Originality — quality of storyline, screenplay, and script.</li>
                <li>Production — camera work, lighting, and shot composition.</li>
                <li>Post-Production — editing, transitions, pacing, continuity, and flow.</li>
                <li>Image — focus, color, and lighting quality.</li>
              </ul>

              <h3>6. Selection & Notifications</h3>
              <ul>
                <li>Filmmakers will be notified only if their film is officially selected.</li>
                <li>Official selection and winners lists will be published on the FilmyFeat website and social media channels.</li>
                <li>Only award winners will receive individual email notifications.</li>
                <li>Award nominations will be announced on 1 December 2026.</li>
                <li>Final winners will be announced exclusively during the offline award ceremony in Chennai on 20 December 2026.</li>
              </ul>

              <h3>7. Screening & Awards</h3>
              <ul>
                <li>The festival will be held offline in Chennai, with screenings and an awards ceremony.</li>
                <li>Certificates will be provided to officially selected participants only.</li>
                <li>All prizes, awards, and certificates will be distributed offline at the event.</li>
                <li>Nominated films will be uploaded exclusively on the FilmyFeat YouTube channel.</li>
                <li>Once selected or nominated, films cannot be removed from the FilmyFeat YouTube channel, even after the festival concludes or if the film does not win an award.</li>
              </ul>

              <h3>8. Promotional Rights</h3>
              <ul>
                <li>FilmyFeat reserves the right to use trailers, teasers, film posters, stills, or behind-the-scenes footage for promotional purposes.</li>
              </ul>

              <h3>9. Disqualification & Disputes</h3>
              <ul>
                <li>If any fraudulent activities or copyright issues are discovered, FilmyFeat reserves the right to disqualify the short film, even after selection.</li>
                <li>FilmyFeat may withdraw or revoke selections or awards if rules or eligibility criteria are violated.</li>
                <li>FilmyFeat may reject any film without assigning reasons if rules are not followed.</li>
                <li>The decision of the jury and festival committee is final and not subject to correspondence.</li>
                <li>Legal action against jury members and organizers is not permitted.</li>
                <li>Violation of any rules or regulations will result in a strict ban from the film festival.</li>
              </ul>

              <div className="terms-download">
                <a href="/filmy-feat-terms.pdf" download className="btn btn-primary">
                  Download Full Terms (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
