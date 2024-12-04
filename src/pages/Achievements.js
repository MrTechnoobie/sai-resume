import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container-fluid mb-0 bg-light" style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <section
          className="resume-section py-5"
          id="awards"
          style={{
            background: "linear-gradient(135deg, #ffffff, #f3f4f7)",
          }}
        >
          <div className="p-4 mx-auto text-center rounded" style={{ maxWidth: "700px" }} data-aos="fade-up">
            {/* Section Title */}
            <h2 className="mb-5 display-4 text-primary font-weight-bold">Achievements</h2>
            
            {/* Achievements List */}
            <ul className="list-unstyled text-left fa-ul mb-0">
              <li className="mb-4" data-aos="fade-right" data-aos-delay="100">
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                <strong>Silver Medalist:</strong> CBSE Football Cluster (2010-2011)
              </li>
              <li className="mb-4" data-aos="fade-left" data-aos-delay="200">
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                <strong>Special Volunteer Award:</strong> (2010)
              </li>
              <li className="mb-4" data-aos="fade-right" data-aos-delay="300">
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                <strong>Quiz Whiz Champion:</strong> Inter-School Quiz (2012)
              </li>
              <li className="mb-4" data-aos="fade-left" data-aos-delay="400">
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                <strong>Gold Medalist:</strong> JNIT Technical Poster Writing (2016)
              </li>
              <li className="mb-4" data-aos="fade-right" data-aos-delay="500">
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                <strong>Star Performer Award:</strong> (2021, 2022)
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Achievements;

