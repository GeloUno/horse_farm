import React, { useState } from 'react';
import { dataAtractions } from '../utility/dataAtractons';
import { Button } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { isMobile } from 'react-device-detect'
export const nextDataAtraction = (numberPage: number) => {
  if (numberPage >= 4) {
    return dataAtractions[0];
  } else {
    return dataAtractions[++numberPage];
  }
};

const equalsPageNumberReturnOpacity = (pageNumber: number, buttonNumber: number) => {
  return buttonNumber === pageNumber
    ? { opacity: '1' }
    : { opacity: '.15' };
};

export const Attractions: React.FC = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [attraction, setAttraction] = useState(dataAtractions[0]);
  return (
    <div className="container">
      <section className="body-section">
        <div
          style={{
            display: 'flex',
            width: '50vw',
            overflow: 'inherit',
          }}
        > <article className="left-article-attraction">
            <header data-testid='attractionTitle' className="title-header">
              <h2 className="title-regular">
                {attraction.titleRegular}
                <strong className="title-bold">{attraction.titleBold}</strong>
              </h2>
            </header>
            <div >
              <p data-testid='attractionDescription' className="description-attraction">{attraction.description}</p>

              <Button
                variant='contained'
                style={{
                  borderRadius: 3,
                  paddingInline: '3rem',
                  marginTop: '5rem'
                }}
                color='primary'
                data-testid='attractionNextButton'
                className="btn "
                onClick={() => {
                  setAttraction(nextDataAtraction(attraction.page));
                }}
              >
                <p>
                  Dalej <i className="fas fa-arrow-right"></i>
                </p>
              </Button>
            </div>
            <div data-testid='backgroundText'>
              <p className="background-text">{attraction.backgroundText}</p>
            </div>
          </article>
        </div>
        <article className="right-article-attraction">
          <div className="parent-image-attraction">
            {!isMobile &&
              <article className="image-article clip-path">

                <img 
                data-testid='attractionImg'                  
                className={(isImageLoaded) ? ("image-attraction") : ("image-attraction-hidden")}
                  src={attraction.image}
                  alt="nauka jazdy konnej"                 
                  onLoadStart={() => {
                    setIsImageLoaded(false)
                  }}
                  onLoad={() => {
                    setIsImageLoaded(true)
                  }}
                />
                {!isImageLoaded && <Skeleton variant='rect' className="image-attraction" width='44.5rem'
                  height='44.5rem' />}
              </article>
            }
          </div>
          {!isMobile && <div className="carousel-buttons">
            {(dataAtractions.map((data) => {

              return (
                <div key={data.page}>
                  {!isImageLoaded && <Skeleton variant='rect'
                    className="btn btn-carousel clip-path"
                    height={'5rem'}
                    key={data.page}
                    data-testid={`buttonNumberAtraction-${data.page}`}
                    onClick={() => setAttraction(dataAtractions[data.page])}
                  />}

                  {isImageLoaded && <button
                    data-testid={`buttonNumberAtraction-${data.page}`}
                    key={data.page}
                    className="btn btn-carousel clip-path"
                    onClick={() => setAttraction(dataAtractions[data.page])}

                    style={equalsPageNumberReturnOpacity(
                      attraction.page,
                      data.page
                    )}
                  ></button>}
                </div>
              );
            }))}
          </div>
          }
        </article>
      </section>
    </div>
  );
};

export default Attractions;
