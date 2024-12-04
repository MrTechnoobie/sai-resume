import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const experiences = [
  {
    title: 'Web Developer',
    company: 'Techpacker Technologies',
    date: 'September 2022 - Present',
    description: `Developed the client-side application using ReactJS, Redux, Angular, HTML, CSS, 
           and third-party libraries like Chart.js for authentication and data visualization. 
           Created and tested applications for websites. Built RESTful APIs using Node.js and Express 
           for data transactions. Implemented validations and performed database optimizations, 
           including indexing and query optimization. Enhanced security with middleware and optimized 
           API endpoints for efficient retrieval and reduced response times with Redis Cache.`,
  },
  {
    title: 'Full Stack Developer',
    company: 'Axestrack Software Solutions',
    date: 'January 2021 - August 2022',
    description: `Integrated backend APIs (RESTful) to fetch and store data securely, using Node.js,
           MySql, MongoDB, and ExpressJS. Implemented a responsive and intuitive user interface 
           using HTML, CSS, JQuery, Angular, ReactJS. Conducted code reviews and optimizations, 
           and used GitHub for team collaboration. Managed development projects using Jira and Agile methodologies.`,
  },
  {
    title: 'Software Tester',
    company: 'AppZoro Technologies',
    date: 'February 2019 - February 2020',
    description: `Reviewed software requirements and prepared test scenarios. Collaborated with frontend developers
           to ensure smooth data parsing from APIs. Tested REST APIs using tools like Postman and analyzed 
           results for database impacts, errors, and usability.`,
  },
];

const Experience = () => {
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
            <h2 className="mb-5 display-4 text-primary font-weight-bold text-center">Experience</h2>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item d-flex flex-column mb-4" data-aos="fade-right" data-aos-delay={(index + 1) * 100}>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div className="flex-grow-1 text-left">
                    <h3 className="mb-0">{exp.title}</h3>
                    <div className="subheading mb-1">{exp.company}</div>
                  </div>
                  <div className="text-muted">{exp.date}</div>
                </div>
                <p className="text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
        <hr className="mb-0" />
      </div>
    </>
  );
};

export default Experience;
