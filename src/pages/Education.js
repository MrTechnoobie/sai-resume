import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container-fluid p-0" style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <section
          className="resume-section py-5"
          id="education"
          style={{
            background: "linear-gradient(135deg, #ffffff, #f3f4f7)",
          }}
        >
          <div className="p-4 mx-auto rounded" style={{ maxWidth: "900px" }} data-aos="fade-up">
            <h2 className="mb-5 display-4 text-primary font-weight-bold text-center">Education</h2>
            
            {/* Education Items */}
            <div className="education-item d-flex flex-column mb-4" data-aos="fade-right" data-aos-delay="100">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="text-left">
                  <h3 className="mb-0">Rajasthan Technical University</h3>
                  <div className="subheading mb-1">Bachelor of Technology</div>
                  <div><b>Branch - </b>Computer Science</div>
                  <p><b>Percentage: </b> 61% </p>
                </div>
                <span className="text-muted">August 2014 - August 2018</span>
              </div>
            </div>
            <div className="education-item d-flex flex-column mb-4" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="text-left">
                  <h3 className="mb-0">Gaurav Memorial International School</h3>
                  <div className="subheading mb-1">Intermediate Education</div>
                  <p><b>Percentage: </b> 60% </p>
                </div>
                <span className="text-muted">July 2014</span>
              </div>
            </div>
            <div className="education-item d-flex flex-column mb-4" data-aos="fade-right" data-aos-delay="300">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="text-left">
                  <h3 className="mb-0">Gaurav Memorial International School</h3>
                  <div className="subheading mb-1">High School Education</div>
                  <p><b>CGPA: </b> 8 </p>
                </div>
                <span className="text-muted">July 2011</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Education;
