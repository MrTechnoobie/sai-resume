import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const Freelance = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container-fluid mb-0" style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <section
          className="resume-section py-5"
          id="experience"
          style={{
            background: "linear-gradient(135deg, #ffffff, #f3f4f7)",
          }}
        >
          <div className="p-4 mx-auto rounded" style={{ maxWidth: "900px" }} data-aos="fade-up">
            <h2 className="mb-5 display-4 text-primary font-weight-bold text-center">Freelance Work</h2>
            <div className="freelance-item d-flex flex-column mb-4" data-aos="fade-right" data-aos-delay="100">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="flex-grow-1 text-left">
                  <h3 className="mb-0">IT Consultant</h3>
                  <div className="subheading mb-1">RES Cleaning Solutions</div>
                </div>
                <div className="text-muted">July 2022 - Present</div>
              </div>
              <p className="text-justify">Developed a responsive and dynamic waste management portfolio website, showcasing eco-friendly waste disposal practices, sustainability tips, and case studies. Leveraged React with hooks for modular, maintainable code and efficient state management, ensuring a smooth user experience.</p>
            </div>
            <div className="freelance-item d-flex flex-column mb-4" data-aos="fade-left" data-aos-delay="200">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="flex-grow-1 text-left">
                  <h3 className="mb-0">IT Consultant</h3>
                  <div className="subheading mb-1">Environ Solutions</div>
                </div>
                <div className="text-muted">April 2021 - Present</div>
              </div>
              <p className="text-justify">Designed an intuitive layout with modern UI/UX principles, optimized for desktop and mobile users. Used React’s state management to display real-time updates on waste management metrics and recent projects. Integrated MongoDB to store and manage data on waste categories, disposal methods, and sustainable practices. Managed the project lifecycle with Git for version control, enabling collaborative development and smooth deployment.</p>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Freelance;
