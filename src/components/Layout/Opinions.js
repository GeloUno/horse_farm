import React from 'react';

let dataOpinions = [
  {
    name: 'Roger',
    description:
      'Velit nisi ea do est aute officia occaecat dolor adipisicing reprehenderit.',
  },
  {
    name: 'Russell',
    description: 'Nostrud in fugiat laboris irure ex dolore in.',
  },
  {
    name: 'Clyde',
    description:
      'Et reprehenderit magna quis occaecat nisi excepteur aliqua incididunt qui eu non excepteur mollit ad.',
  },
  {
    name: 'Egbert',
    description: 'Laboris ea eiusmod do qui sunt et mollit quis esse. ',
  },
  {
    name: 'Clare',
    description:
      'Deserunt sunt proident occaecat eu tempor esse proident labore est aute in laborum.',
  },
  {
    name: 'Bobbie',
    description: 'Duis consectetur ad commodo ea aliqua ex fugiat est.',
  },
  {
    name: 'Simon',
    description:
      'Deserunt aute reprehenderit exercitation eiusmod irure excepteur ad ad nisi.',
  },
  {
    name: 'Elizabeth',
    description:
      'Occaecat nulla ut fugiat do aliquip adipisicing officia exercitation esse proident id cupidatat incididunt velit.',
  },
  {
    name: 'Ted',
    description: 'Officia nulla pariatur velit commodo in nisi minim magna.',
  },
  {
    name: 'Caroline',
    description:
      'Officia duis fugiat in nulla culpa id laborum proident cupidatat.',
  },
];

const getRandomRange = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1));
};
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
  randomOpinions = getRandomDataNoRepeat(dataOpinions, 10);
  return (
    <div>
      <section className="section-opinion-first"></section>
      <section className="section-opinion-second"></section>
      {randomOpinions &&
        randomOpinions.map((data, index) => {
          console.log('data :>> ', data);
          return <div key={index}>{data[0].name}</div>;
        })}
      <section className="section-opinion-third"></section>
    </div>
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
