import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid p-0 bg-light" style={{ scrollBehavior: 'smooth', fontFamily: 'inherit' }}>
      <Header />
      <section className="resume-section py-5" id="about" style={{ background: "linear-gradient(135deg, #ffffff, #f3f4f7)" }}>
        <div className="p-4 mx-auto rounded" style={{ maxWidth: "900px" }} data-aos="fade-up">
          {/* Name */}
          <h1 className="mb-4 display-4 text-primary font-weight-bold text-center animate__animated animate__fadeInDown">
            Sai <span className="text-secondary">Sutikshna</span>
          </h1>

          {/* Contact Information */}
          <div className="subheading mb-4 text-center d-flex justify-content-center" style={{ gap: "15px" }} data-aos="fade-right">
            <p className="mb-2 d-flex align-items-center">
              <i className="fas fa-phone text-primary mr-2"></i> (+91) 7355754912
            </p>
            <p className="mb-2 d-flex align-items-center">
              <i className="fas fa-envelope text-primary mr-2"></i>
              <a href="mailto:saisutikshna@gmail.com" className="text-dark text-decoration-none">
                saisutikshna@gmail.com
              </a>
            </p>
          </div>

          {/* About Paragraph */}
          <p className="lead text-justify text-muted mb-5 animate__animated animate__fadeInUp">
            Experienced full stack developer with 4 years of proven expertise in MySQL and Docker. Worked on 20+ projects from inception to deployment with 100% client satisfaction. Strong problem-solving skills and adept at website deployment. Ideal for teams seeking a skilled developer committed to excellence and innovation.
          </p>

          {/* Social Icons */}
          <div className="social-icons d-flex justify-content-center mb-5 animate__animated animate__pulse animate__infinite">
            <a
              className="social-icon mx-3 text-primary social-icon-hover"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }}
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-icon mx-3 text-dark social-icon-hover"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              className="social-icon mx-3 text-info social-icon-hover" 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ fontSize: "1.5rem" }} 
              data-aos="zoom-in" 
              data-aos-delay="300" 
            > 
              <i className="fab fa-twitter"></i> 
            </a>
            <a
              className="social-icon mx-3 text-danger social-icon-hover"
              href="https://mail.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }}
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Home;
