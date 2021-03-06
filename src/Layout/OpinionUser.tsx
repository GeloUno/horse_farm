import { Skeleton } from '@material-ui/lab';
import React, { useState } from 'react';
import { isMobile } from 'react-device-detect'

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

  const [isLoadedData, setIsLoadedData] = useState<boolean>(isMobile ? (true) : (false))
  return (
    <article className="article-body flex-direction-col" data-cy='opinionUserArticle'>
      {!isMobile &&
        <div data-cy='opinionUserImage'>
          {<>

            <img
              className="image-user"
              src={sourceImage}
              alt="zdjęcie użytkownika"
              onLoad={() => { setIsLoadedData(true) }}
            />

            {!isLoadedData && <Skeleton variant='circle' width='8rem' height='8rem' />}
          </>
          }

        </div>
      }

      <div className="nick-user" data-cy='opinionUserNicke'>

        <h2 style={{ marginTop: `2rem` }}>{isLoadedData ? (
          nick
        ) : (
          <Skeleton variant='rect' width='8rem' height='2rem' />
        )}</h2>


      </div>

      <div className="description" data-cy='opinionUserDescription'>
        <p>{isLoadedData ? (
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
