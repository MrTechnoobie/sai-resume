import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';

const Interest = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="container-fluid mb-0" style={{ scrollBehavior: 'smooth' }}>
        <Header />
        <section
          className="resume-section py-5"
          id="interests"
          style={{
            background: "linear-gradient(135deg, #ffffff, #f3f4f7)",
          }}
        >
          <div className="p-4 mx-auto rounded" style={{ maxWidth: "700px" }} data-aos="fade-up">
            <h2 className="mb-5 display-4 text-primary font-weight-bold text-center">Interests</h2>
            <div className="interest-item mb-4" data-aos="fade-right" data-aos-delay="100">
              <p className="text-justify">
                Apart from being a web developer, I enjoy most of my time being outdoors. 
                You can easily find me roaming around the woods or in remote areas whenever 
                on holidays and vacations. I am an avid mountain trekker and a novice skier. 
                Besides this, I enjoy biking, free climbing, and exploring the uncharted territories.
              </p>
            </div>
            <div className="interest-item mb-4" data-aos="fade-left" data-aos-delay="200">
              <p className="text-justify">
                When forced indoors, I follow a number of movies and shows or animes which includes 
                genres such as sci-fi, thriller, suspense, drama, historical, and biographical among few.
                You can easily find me immersed in books whenever I have time to spare. I am an 
                enthusiastic audiophile and can be found listening to some or other kind of music 
                almost all the time, it also helps me to relax. I am an aspiring chef, and I spend ample 
                amount of my time in exploring latest technology advancements in the web development world.
              </p>
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Interest;
