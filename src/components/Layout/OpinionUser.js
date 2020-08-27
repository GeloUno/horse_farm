import React from 'react';

const OpinionUser = ({ nick, sourceImage, description }) => {
  return (
    <article className="article-body flex-direction-col">
      <div className="image-user">
        <img src={sourceImage} alt="zdjęcie użytkownika" />
      </div>

      <div className="nick-user">
        <h2>{nick}</h2>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="contact-link">
        <link rel="stylesheet" href="#" />
        kontakt <i className="fas fa-arrow-right"></i>
      </div>
    </article>
  );
};

export default OpinionUser;
