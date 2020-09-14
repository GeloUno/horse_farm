import React from 'react';
import Pagination from '../Layout/Pagination';
import UploadImage from '../Layout/UploadImage';
import LikesAndComments from './LikesAndComments';

/* FIXME: isAuth change to false in prod */

const Galery = ({
  galeryImageModalToggle,
  setDataGaleryImageModal,
  isAuth = true,
  userID = null,
  isPagination = true,
  imagesGalery = [
    {
      url:
        'https://cdn.pixabay.com/photo/2017/11/19/12/55/horses-2962718_960_720.jpg',
      like: [{ uid: 1 }, { uid: 2 }, { uid: 6 }, { uid: 9 }],
      comments: [
        { uid: 1, comment: 'nice' },
        { uid: 2, comment: 'love' },
        { uid: 3, comment: ' best' },
      ],
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2019/08/26/06/26/pony-4430894_960_720.jpg',
      like: [{ uid: 1 }, { uid: 2 }],
      comments: [
        { uid: 1, comment: 'nice' },
        { uid: 2, comment: 'love' },
        { uid: 3, comment: ' best' },
        { uid: 2, comment: 'love' },
        { uid: 3, comment: ' best' },
        { uid: 2, comment: 'love' },
        { uid: 3, comment: ' best' },
      ],
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2018/08/22/23/26/the-horse-3624892_960_720.jpg',
      like: [{ uid: 4 }, { uid: 8 }, { uid: 5 }],
      comments: [
        { uid: 1, comment: 'nice' },
        { uid: 2, comment: 'love' },
        { uid: 2, comment: 'love' },
        { uid: 3, comment: ' best' },
      ],
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2017/09/20/05/56/the-horse-2767521_960_720.jpg',
      like: [{ uid: 4 }, { uid: 8 }, { uid: 5 }],
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2019/08/26/10/14/horses-4431313_960_720.jpg',
      comments: [
        { uid: 1, comment: 'nice' },
        { uid: 2, comment: 'love' },
        { uid: 2, comment: 'love' },
        { uid: 3, comment: ' best' },
      ],
    },
    {
      url:
        'https://whitefish.skyrun.com/components/com_jomholiday/assets/images/04-spinner.gif',
      like: [
        { uid: 4 },
        { uid: 8 },
        { uid: 7 },
        { uid: 9 },
        { uid: 10 },
        { uid: 12 },
        { uid: 55 },
        { uid: 47 },
      ],
    },

    {
      url:
        'https://cdn.pixabay.com/photo/2018/07/21/03/55/girl-3551832_960_720.jpg',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2017/01/16/19/17/horses-1984977_960_720.jpg',
      like: [{ uid: 3 }],
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2012/10/06/22/18/horse-60153_960_720.jpg',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2016/02/15/13/26/horse-1201143_960_720.jpg',
    },
  ],
}) => {
  return (
    <div>
      <div>{isAuth && <UploadImage />}</div>
      <div className="gridImages">
        {imagesGalery &&
          imagesGalery.map((imageGalery, index) => {
            return (
              <div key={index} className="gridImage">
                <img
                  key={index}
                  src={imageGalery.url}
                  alt="Zdjecia koni z stadniny"
                  onClick={(e) => {
                    setDataGaleryImageModal(imageGalery);
                    galeryImageModalToggle(e);
                  }}
                />
                <LikesAndComments imageGalery={imageGalery} userID={userID} />
              </div>
            );
          })}
      </div>
      {isPagination && <Pagination numberPage={1} lengthPages={3} />}
    </div>
  );
};

export default Galery;
