import React, { useState } from 'react';
import { dataAtractions } from '../utility/dataAtractons.js';

const nextPage = (numberPage) => {
  if (numberPage >= 5) {
    return dataAtractions[1];
  } else {
    return dataAtractions[++numberPage];
  }
};

const equalsPageNumberReturnOpacity = (pageNumber, buttonNumber) => {
  return Number(buttonNumber) === Number(pageNumber)
    ? { opacity: '1' }
    : { opacity: '.15' };
};

export const Attractions = () => {
  const [attraction, setAttraction] = useState(dataAtractions[1]);
  return (
    <div className="container">
      <section className="body-section">
        <article className="left-article-attraction">
          <header className="title-header">
            <h2 className="title-regular">
              {attraction.titleRegular}
              <strong className="title-bold">{attraction.titleBold}</strong>
            </h2>
          </header>
          <div>
            <p className="description-attraction">{attraction.description}</p>

            <button
              className="btn btn-green"
              onClick={() => {
                setAttraction(nextPage(attraction.page));
              }}
            >
              <p>
                Dalej <i className="fas fa-arrow-right"></i>
              </p>
            </button>
          </div>
          <div>
            <p className="background-text">{attraction.backgroundText}</p>
          </div>
        </article>
        <article className="right-article-attraction">
          <div className="parent-image-attraction">
            <article className="image-article clip-path">
              <img
                className="image-attraction"
                src={attraction.image}
                alt="nauka jazdy konnej"
              />
            </article>
          </div>
          <div className="carousel-buttons">
            {Object.keys(dataAtractions).map((buttonNumber) => {
              return (
                <button
                  key={buttonNumber}
                  className="btn btn-carousel clip-path"
                  onClick={() => setAttraction(dataAtractions[buttonNumber])}
                  style={equalsPageNumberReturnOpacity(
                    attraction.page,
                    buttonNumber
                  )}
                ></button>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Attractions;
