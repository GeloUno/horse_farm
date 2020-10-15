import React from 'react';
import OpinionUser from './OpinionUser';
import { DEVOpinionData } from '../../DevUtility/opinion';

export const Opinions = () => {
  let dataOpinions = DEVOpinionData;

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
    // return null;
    throw new TypeError(
      `I can't return a larger array than the source`,
      'dataArray is smaller than you want return'
    );
  };

  // let randomOpinions = null;
  let randomOpinions = getRandomDataNoRepeat(dataOpinions, 4);
  return (
    <section className="container flex-direction-col">
      <header className="title-header">
        <h2 className="title-regular">
          Trochę o<strong className="title-bold">NAS</strong>
        </h2>
      </header>
      <section className="opinios-body flex-direction-row">
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
