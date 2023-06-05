import React from 'react';

const Sidebar = () => {
  return (
    <header className="sidebar">
      {/* <div className="sidebar__content"> */}
      {/* logo */} <h1>North Room Records</h1>
      <nav className="menu">
        <a href="#discography">Discography</a>
        <a href="#about">About</a>
        <div className="social-icons">
          <div className="icon">
            <img
              src={process.env.PUBLIC_URL + '/assets/instagram.png'}
              alt=""
            />
          </div>
          <div className="icon">
            <img src={process.env.PUBLIC_URL + '/assets/email.png'} alt="" />
          </div>
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Sidebar;
