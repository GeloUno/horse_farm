import { Skeleton } from '@material-ui/lab';
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
    <article className="article-body flex-direction-col" data-cy='opinionUserArticle'>
      <div data-cy='opinionUserImage'>
        {
          sourceImage ? (
            <img
              className="image-user"
              src={sourceImage}
              alt="zdjęcie użytkownika"
            />
          ) : (
            <Skeleton variant='circle' width='8rem' height='8rem' />
          )
        }

      </div>

      <div className="nick-user" data-cy='opinionUserNicke'>

        <h2>{nick ? (
          nick
        ) : (
          <Skeleton variant='rect' />
        )}</h2>


      </div>

      <div className="description" data-cy='opinionUserDescription'>
        <p>{description ? (
          description
        ) : (
          <>
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
            <Skeleton variant='text' />
          </>
        )}</p>
      </div>

      <div className="contact-link" data-cy='opinionUserContaktLink'>
        <link rel="stylesheet" href="#" />
        <p>
          kontakt <i className="fas fa-arrow-right"></i>
        </p>
      </div>
    </article>
  );
};

export default OpinionUser;
