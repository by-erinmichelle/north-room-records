import React from 'react';

const Album = ({ album }) => {
  const { title, artist, role, display_year, link, image } = album;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="album__link-wrapper"
    >
      <div className="album">
        <img
          src={process.env.PUBLIC_URL + '/assets/artwork/' + image}
          alt={title}
        />
        <h5 className="album__artist-title">
          {artist} – {title}
        </h5>

        <div className="album__info">
          <p className="role">{role}</p>
          <p className="year">{display_year}</p>
        </div>
      </div>
    </a>
  );
};

export default Album;
