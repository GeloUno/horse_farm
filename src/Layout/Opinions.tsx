import React from 'react';
import OpinionUser from './OpinionUser';

//FIXME if data is in file when watch image data is only two and get error on load data should be use useEffect
interface Opinion {
  name: string;
  description: string;
  sourceImage: string;
}


export const Opinions: React.FC = () => {

  let dataOpinions: Array<Opinion> = [
    {
      name: 'Roger',
      description:
        'Velit nisi ea do est aute officia occaecat dolor adipisicing reprehenderit.',
      sourceImage: 'https://randomuser.me/api/portraits/men/14.jpg?width=10&height=10',
    },
    {
      name: 'Russell',
      description: 'Nostrud in fugiat laboris irure ex dolore in.',
      sourceImage: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
    {
      name: 'Clyde',
      description:
        'Et reprehenderit magna quis occaecat nisi excepteur aliqua incididunt qui eu non excepteur mollit ad.',
      sourceImage: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      name: 'Egbert',
      description: 'Laboris ea eiusmod do qui sunt et mollit quis esse. ',
      sourceImage: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      name: 'Clare',
      description:
        'Deserunt sunt proident occaecat eu tempor esse proident labore est aute in laborum.',
      sourceImage: 'https://randomuser.me/api/portraits/women/81.jpg',
    },
    {
      name: 'Bobbie',
      description: 'Duis consectetur ad commodo ea aliqua ex fugiat est.',
      sourceImage: 'https://randomuser.me/api/portraits/men/18.jpg',
    },
    {
      name: 'Angela',
      description:
        'Deserunt aute reprehenderit exercitation eiusmod irure excepteur ad ad nisi.',
      sourceImage: 'https://randomuser.me/api/portraits/women/64.jpg',
    },
    {
      name: 'Elizabeth',
      description:
        'Occaecat nulla ut fugiat do aliquip adipisicing officia exercitation esse proident id cupidatat incididunt velit.',
      sourceImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
    {
      name: 'Ted',
      description: 'Officia nulla pariatur velit commodo in nisi minim magna.',
      sourceImage: 'https://randomuser.me/api/portraits/men/60.jpg',
    },
    {
      name: 'Caroline',
      description:
        'Officia duis fugiat in nulla culpa id laborum proident cupidatat.',
      sourceImage: 'https://randomuser.me/api/portraits/women/49.jpg',
    },
  ];

  /* hm ... it should be in server side */
  const getRandomRange = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1));
  };
  /* hm ... it should be in server side */
  const getRandomDataOpinionNoRepeat = (dataArray: Array<Opinion>, lengthArrayBack: number) => {
    if (dataArray.length >= lengthArrayBack) {
      const arrayBack = [];
      for (let index = 0; index < lengthArrayBack; index++) {
        let removed = dataArray.splice(getRandomRange(dataArray.length, 1), 1);
        arrayBack.push(removed);
      }
      return arrayBack;
    }
    // return null;
    throw new TypeError(
      `I can't return a larger array than the source
      dataArray is smaller than you want return`
    );
  };

  // let randomOpinions = null;
  let randomOpinions = getRandomDataOpinionNoRepeat(dataOpinions, 4);
  return (
    <section className="container container-opinion flex-direction-col" data-cy='opinionSection'>
      <header className="title-header" data-cy='opinionHeader'>
        <h2 className="title-regular">
          Trochę o<strong className="title-bold">NAS</strong>
        </h2>
      </header>
      <section className="opinios-body flex-direction-row" data-cy='opinionSectionAllUsers'>
        {randomOpinions &&
          randomOpinions.map((data, index) => {
            const getObjectData = data[0];
            // console.log('data :>> ', getObjectData);
            return (
              <OpinionUser
                key={index}
                nick={getObjectData.name}
                sourceImage={getObjectData.sourceImage}
                description={getObjectData.description}
                data-cy='opinionUser'
              />
            );
          })}
      </section>
    </section>
  );
};

export default Opinions;

