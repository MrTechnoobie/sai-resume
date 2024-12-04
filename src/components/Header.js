import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNavigation = (path) => {
    navigate(path, { replace: true });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow animated-header"
      id="sideNav"
      style={{ scrollBehavior: 'smooth', fontFamily: 'inherit', padding: '10px' }}
    >
      <div className="navbar-brand js-scroll-trigger d-flex align-items-center" onClick={() => handleNavigation('/')}>
        <span className="d-block d-lg-none stylish-font animate__animated animate__fadeInLeft">Sai Sutikshna</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2 profile-img animate__animated animate__fadeInDown"
            src="assets/img/profile.jpg"
            alt="Sai Sutikshna"
            style={{ 
              width: '120px', 
              height: '120px', 
              objectFit: 'cover', 
              border: '3px solid white', 
              padding: '2px', 
              objectPosition: 'center' 
            }}
          />
        </span>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle Navigation"
        data-aos="fade-in"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive" data-aos="fade-in">
        <ul className="navbar-nav flex-column text-left w-100">
          {[
            { name: 'About', path: '/' },
            { name: 'Experience', path: '/experience' },
            { name: 'Education', path: '/education' },
            { name: 'Skills', path: '/skills' },
            { name: 'Achievements', path: '/achievements' },
            { name: 'Freelance', path: '/freelance' },
            { name: 'Interest', path: '/interest' },
          ].map((item, index) => (
            <li className="nav-item mb-2" key={item.name} data-aos="fade-right" data-aos-delay={index * 100}>
              <div
                className="nav-link js-scroll-trigger animated-link"
                onClick={() => handleNavigation(item.path)}
                style={{ padding: '10px', fontSize: '1.1rem', transition: 'color 0.3s', cursor: 'pointer' }}
                onMouseEnter={(e) => e.target.style.color = '#ffd700'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
