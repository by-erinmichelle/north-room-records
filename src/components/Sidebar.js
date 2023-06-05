import React from 'react';

const Sidebar = () => {
  return (
    <header className="sidebar">
      {/* <div className="sidebar__content"> */}
      {/* logo */} <h1>North Room Records</h1>
      <nav className="menu">
        <a className="menu__item" href="#discography">
          Discography
        </a>
        <a className="menu__item" href="#about">
          About
        </a>

        <div className="social-icons">
          <a href="instagram.com">
            <div className="icon">
              <img
                src={process.env.PUBLIC_URL + '/assets/instagram.png'}
                alt=""
              />
            </div>
          </a>
          <a href="mailto:">
            <div className="icon">
              <img
                src={process.env.PUBLIC_URL + '/assets/email.png'}
                alt="email icon"
              />
            </div>
          </a>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Sidebar;
