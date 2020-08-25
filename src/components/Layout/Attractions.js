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
    titleRegular: 'Razem w ',
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

export const Attractions = () => {
  const [attraction, setAttraction] = useState(dataAtractions[1]);
  return (
    <section className="contaniner">
      <div className="leftSectionAtraction">
        <article className="article">
          <div className="titleAttraction">
            <h2 className="titleRegular">{attraction.titleRegular}</h2>
            <h2 className="titleBold">{' ' + attraction.titleBold}</h2>
          </div>
          <div>
            <h3 className="description">{attraction.description}</h3>

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
            <div className="backgroundText">{attraction.backgroundText}</div>
          </div>
        </article>
      </div>
      <div className="rightSectionAtraction">
        <div className="imageAtraction">
          <div className="parrent">
            <div className="test-article">
              {console.log('att', attraction)}
              <img className="image-test" src={attraction.image} alt="" />
            </div>
          </div>
        </div>
        <div className="slider"></div>
      </div>
    </section>
  );
};

export default Attractions;
