import React from 'react';
import Pagination from './Pagination';
import UploadImage from './UploadImage';

/* FIXME: isAuth change to false in prod */
/* TODO: add horse like and comments */

const isUserIdIsInArrayOfObjects = (data, userId) => {
  if (data.filter((lik) => lik['uid'] === userId).length > 0) {
    return true;
  } else {
    return false;
  }
};

const Galery = ({
  isAuth = true,
  userID = 1,
  isPagination = true,
  imagesGalery = [
    {
      url:
        'https://cdn.pixabay.com/photo/2017/11/19/12/55/horses-2962718_960_720.jpg',
      like: [{ uid: 1 }, { uid: 2 }, { uid: 6 }, { uid: 9 }],
      comments: [
        { uid: 1, commnet: 'nice' },
        { uid: 2, commnet: 'love' },
        { uid: 3, commnet: ' best' },
      ],
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2019/08/26/06/26/pony-4430894_960_720.jpg',
      like: [{ uid: 1 }, { uid: 2 }],
      comments: [
        { uid: 1, commnet: 'nice' },
        { uid: 2, commnet: 'love' },
        { uid: 3, commnet: ' best' },
        { uid: 2, commnet: 'love' },
        { uid: 3, commnet: ' best' },
        { uid: 2, commnet: 'love' },
        { uid: 3, commnet: ' best' },
      ],
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2018/08/22/23/26/the-horse-3624892_960_720.jpg',
      like: [{ uid: 4 }, { uid: 8 }, { uid: 5 }],
      comments: [
        { uid: 1, commnet: 'nice' },
        { uid: 2, commnet: 'love' },
        { uid: 2, commnet: 'love' },
        { uid: 3, commnet: ' best' },
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
        { uid: 1, commnet: 'nice' },
        { uid: 2, commnet: 'love' },
        { uid: 2, commnet: 'love' },
        { uid: 3, commnet: ' best' },
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
      {isAuth && <UploadImage />}
      <div className="gridImages">
        {imagesGalery &&
          imagesGalery.map((imageGalery, index) => {
            return (
              <div key={index} className="gridImage">
                <img
                  key={index}
                  src={imagesGalery[index].url}
                  alt="Zdjecia koni z stadniny"
                />
                <div className="likeAndComments">
                  <div className="numberLike number">
                    {imageGalery.like &&
                      isUserIdIsInArrayOfObjects(imageGalery.like, userID)}
                    <i
                      className="fas fa-hat-cowboy"
                      style={
                        imageGalery.like &&
                        isUserIdIsInArrayOfObjects(imageGalery.like, userID)
                          ? { color: 'hsla(24, 53%, 42%, 1)' }
                          : { color: '#707070' }
                      }
                    ></i>
                    {(imageGalery.like && imageGalery.like.length) || 0}
                  </div>
                  <div className="numberComments number">
                    <i
                      className="fas fa-comments"
                      style={
                        imageGalery.comments &&
                        isUserIdIsInArrayOfObjects(imageGalery.comments, userID)
                          ? { color: 'hsla(94, 30%, 47%, 1)' }
                          : { color: '#707070' }
                      }
                    ></i>
                    {(imageGalery.comments && imageGalery.comments.length) || 0}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {isPagination && <Pagination numberPage={1} lengthPages={3} />}
    </div>
  );
};

export default Galery;
