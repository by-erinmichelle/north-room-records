import React from 'react';

const Album = ({ album }) => {
  const { title, artist, role, year, link, img_path } = album;

  return (
    <a href={link} className="album__link-wrapper">
      <div className="album">
        <img src={img_path} alt={title} />
        <h4 className="artist">{artist}</h4>
        <h4 className="title">{title}</h4>

        <p className="role">{role}</p>
        <p className="year">{year}</p>
      </div>
    </a>
  );
};

export default Album;
