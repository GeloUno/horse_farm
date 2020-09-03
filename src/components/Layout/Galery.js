import React from 'react';

/* FIXME: isAuth change to false in prod */
/* TODO: add horse like and comments */

const Galery = ({
  isAuth = true,
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
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2018/08/22/23/26/the-horse-3624892_960_720.jpg',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2017/09/20/05/56/the-horse-2767521_960_720.jpg',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2019/08/26/10/14/horses-4431313_960_720.jpg',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2019/08/26/08/48/sign-4431155_960_720.jpg',
    },

    {
      url:
        'https://cdn.pixabay.com/photo/2018/07/21/03/55/girl-3551832_960_720.jpg',
    },
    {
      url:
        'https://cdn.pixabay.com/photo/2017/01/16/19/17/horses-1984977_960_720.jpg',
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
    <div className="container containerImages">
      {isAuth && (
        <div className="addImage">
          <input type="file" name="" id="" />
        </div>
      )}
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
              </div>
            );
          })}
      </div>
      <div className="paggination"></div>
    </div>
  );
};

export default Galery;
