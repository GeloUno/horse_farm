import React from 'react';

const OpinionUser = ({ nick, sourceImage, description }) => {
  return (
    <article className="article-body flex-direction-col">
      <div>
        <img
          className="image-user"
          src={sourceImage}
          alt="zdjęcie użytkownika"
        />
      </div>

      <div className="nick-user">
        <h2>{nick}</h2>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="contact-link">
        <link rel="stylesheet" href="#" />
        <p>
          kontakt <i className="fas fa-arrow-right"></i>
        </p>
      </div>
    </article>
  );
};

export default OpinionUser;
