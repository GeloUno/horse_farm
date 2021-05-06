import React from 'react';

export interface OpinionUserProps {
  nick: string,
  sourceImage: string,
  description: string,
}

const OpinionUser: React.FC<OpinionUserProps> = (
  {
    nick,
    sourceImage,
    description
  }
) => {
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
