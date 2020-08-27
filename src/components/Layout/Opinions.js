import React from 'react';
import OpinionUser from './OpinionUser';

let dataOpinions = [
  {
    name: 'Roger',
    description:
      'Velit nisi ea do est aute officia occaecat dolor adipisicing reprehenderit.',
    sourceImage: 'https://randomuser.me/api/portraits/men/14.jpg',
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
const getRandomRange = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1));
};
/* hm ... it should be in server side */
const getRandomDataNoRepeat = (dataArray, lengthArrayBack) => {
  if (dataArray.length >= lengthArrayBack) {
    const arrayBack = [];
    for (let index = 0; index < lengthArrayBack; index++) {
      let removed = dataArray.splice(getRandomRange(dataArray.length, 1), 1);
      arrayBack.push(removed);
    }
    return arrayBack;
  }
  throw new TypeError(
    `I can't return a larger array than the source`,
    'dataArray is smaller than you want return'
  );
};

export const Opinions = () => {
  let randomOpinions = null;
  randomOpinions = getRandomDataNoRepeat(dataOpinions, 4);
  return (
    <section className="contaniner flex-direction-col">
      <header className="title-header">
        <h2 className="title-regular">
          Trochę o<strong className="title-bold">NAS</strong>
        </h2>
      </header>
      <section className="opinios-body flex-direction-row">
        {randomOpinions.map((data, index) => {
          const getObjectData = data[0];
          console.log('data :>> ', getObjectData);
          return (
            <OpinionUser
              key={index}
              nick={getObjectData.name}
              sourceImage={getObjectData.sourceImage}
              description={getObjectData.description}
            />
          );
        })}
      </section>
    </section>
  );
};

export default Opinions;

/*
{
     b.map((element) => {
        console.log('random :>> ', getRandomRange(a.length, 1));
        console.log('a :>> ', a);
        console.log('a.lenght :>> ', a.length);
        console.log('a :>> ', a);
        let removed = a.splice(getRandomRange(a.length, 1), 1);
        console.log('removed :>> ', removed[0].name, removed[0].description);
      })}
*/
