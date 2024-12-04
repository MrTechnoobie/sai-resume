import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid mb-0 bg-light p-5" style={{ fontFamily: 'inherit', scrollBehavior: 'smooth' }}>
      <Header />
      <section className="resume-section text-center py-5" id="skills" style={{ background: "linear-gradient(135deg, #ffffff, #f3f4f7)" }}>
        <div className="p-4 mx-auto rounded" style={{ maxWidth: "900px" }} data-aos="fade-up">
          <h1 className="mb-5 display-4 text-primary font-weight-bold text-center">Skills</h1>

          
          <h2 className="subheading text-secondary mb-3" data-aos="fade-right">Programming Languages & Tools</h2>
          <ul className="list-inline dev-icons text-center">
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="100">
              <i className="fab fa-html5 fa-2x text-danger"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>HTML5</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="200">
              <i className="fab fa-css3-alt fa-2x text-primary"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>CSS3</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="300">
              <i className="fab fa-js-square fa-2x text-warning"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>JavaScript</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="400">
              <i className="fab fa-angular fa-2x text-danger"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>Angular</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="500">
              <i className="fab fa-react fa-2x text-info"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>React</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="600">
              <i className="fab fa-node-js fa-2x text-success"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>Node.js</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="700">
              <i className="fab fa-npm fa-2x text-secondary"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>NPM</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="800">
              <i className="fab fa-sass fa-2x text-pink"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>Sass</p>
            </li>
            <li className="list-inline-item mx-2" data-aos="zoom-in" data-aos-delay="900">
              <i className="fab fa-github fa-2x text-dark"></i>
              <p className="mt-2 small text-muted" style={{ fontSize: '0.8rem' }}>GitHub</p>
            </li>
          </ul>

         
          <h2 className="subheading text-secondary mt-5 mb-3" data-aos="fade-left">Workflow</h2>
          <ul className="fa-ul mb-0">
            <li className="mb-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
              <span className="fa-li mr-2">
                <i className="fas fa-check-circle text-success"></i>
              </span>
              <span className="text-muted">Mobile-First, Responsive Design</span>
            </li>
            <li className="mb-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
              <span className="fa-li mr-2">
                <i className="fas fa-check-circle text-success"></i>
              </span>
              <span className="text-muted">Cross-Browser Testing & Debugging</span>
            </li>
            <li className="mb-3 d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
              <span className="fa-li mr-2">
                <i className="fas fa-check-circle text-success"></i>
              </span>
              <span className="text-muted">Cross-Functional Teams</span>
            </li>
            <li className="d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
              <span className="fa-li mr-2">
                <i className="fas fa-check-circle text-success"></i>
              </span>
              <span className="text-muted">Agile Development & Scrum</span>
            </li>
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
};

export default Skills;