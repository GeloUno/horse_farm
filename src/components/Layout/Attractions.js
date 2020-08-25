import React, { useState } from 'react';
import atrattionImage_1 from '../../assets/Attractions/Stadnina-1.png';
import atrattionImage_2 from '../../assets/Attractions/Stadnina-2.png';
import atrattionImage_3 from '../../assets/Attractions/Stadnina-3.png';
import atrattionImage_4 from '../../assets/Attractions/Stadnina-4.png';
import atrattionImage_5 from '../../assets/Attractions/Stadnina-5.png';

const dataAtractions = {
  1: {
    titleRegular: 'Jazda',
    titleBold: 'Konna',
    description:
      'serdecznie zapraszamy na naukę jazdy konnej, zarówno tych dużych jak i najmniejszych, tych z doświadczonych, oraz tych którzy chcą się nauczyć tego pięknego sportu',
    backgroundText: 'konie',
    image: atrattionImage_1,
    page: 1,
  },
  2: {
    titleRegular: 'Dla',
    titleBold: 'Juniora',
    description:
      'z nami naukę jazdy konnej możesz już zacząć od najmłodszych lat',
    backgroundText: 'to',
    image: atrattionImage_2,
    page: 2,
  },
  3: {
    titleRegular: 'Tutaj',
    titleBold: 'Trenujemy',
    description:
      'na tym wybiegu najmłodsi uczą się zdobywać pierwsze szlify jazdy konnej jak również ci doświadczeni mogą trochę poszaleć',
    backgroundText: 'Nasza',
    image: atrattionImage_3,
    page: 3,
  },
  4: {
    titleRegular: 'Razem w',
    titleBold: 'Teren',
    description:
      'jeśli pod okiem instruktora zdobędziesz odpowiednie doświadczenie ruszymy na jazdę konną w teren po malowniczym krajobrazie Lubelszczyzny',
    backgroundText: 'pasja',
    image: atrattionImage_4,
    page: 4,
  },
  5: {
    titleRegular: 'Po',
    titleBold: 'Treningu',
    description:
      'a wieczorkiem usiądźmy razem przy ognisku by zregenerować siły na kolejną jazdę konną',
    backgroundText: 'życia',
    image: atrattionImage_5,
    page: 5,
  },
};
const nextPage = (numberPage) => {
  if (numberPage >= 5) {
    return dataAtractions[1];
  } else {
    return dataAtractions[++numberPage];
  }
};

const equalsPageNumberReturnOpacity = (pageNumber, buttonNumber) => {
  // eslint-disable-next-line eqeqeq
  return buttonNumber == pageNumber ? { opacity: '1' } : { opacity: '.15' };
};

export const Attractions = () => {
  const [attraction, setAttraction] = useState(dataAtractions[1]);
  return (
    <div className="contaniner">
      <section className="left-section-attraction">
        <article className="article">
          <header className="title-attraction">
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
      </section>
      <section className="right-section-attraction">
        <div className="parent-image-attraction">
          <article className="image-article clip-path">
            <img
              className="image-attraction"
              src={attraction.image}
              alt="nauka jazdy konnej"
            />
          </article>
        </div>
        <div className="carousel">
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
      </section>
    </div>
  );
};

export default Attractions;
