import React from 'react';

const About = () => {
  return (
    <div id="about" className="about">
      <img
        className="about__img"
        src={process.env.PUBLIC_URL + '/assets/about.jpg'}
        alt="Rob and Packie"
      />

      <div className="about__content">
        <h2>Rob & Packie.</h2>
        <p>
          Rob and Packie first met in the dorms of Temple University, where they
          both studied music. Rob has a passion for the technical side of music
          and production, while Packie specializes in the creative direction of
          songwriting and composition. Whether you are a full band recording an
          LP or a singer-songwriter looking to expand your sound, the boys at
          North Room ensure every project, big or small, sounds its best.
        </p>
      </div>
    </div>
  );
};

export default About;
