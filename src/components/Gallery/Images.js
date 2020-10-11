import React from 'react';
import Pagination from '../Layout/Pagination';
import UploadImage from './UploadImage';
import LikesAndComments from './LikesAndComments';
import { DevImagesData } from '../../DevUtility/imagesGalery';

/* FIXME: isAuth change to false in prod */

const Gallery = ({
  galleryImageModalToggle,
  setDataGalleryImageModal,
  isAuth = true,
  userID = null,
  isPagination = true,
  imagesGallery = DevImagesData,
}) => {
  return (
    <div>
      <div>{isAuth && <UploadImage />}</div>
      <div className="gridImages">
        {imagesGallery &&
          imagesGallery.map((imageGallery, index) => {
            return (
              <div key={index} className="gridImage">
                <img
                  className="accessToggleModalShow"
                  key={index}
                  src={imageGallery.url}
                  alt="Zdjecia koni z stadniny"
                  onClick={(e) => {
                    setDataGalleryImageModal(imageGallery);
                    galleryImageModalToggle(e);
                  }}
                />
                <LikesAndComments imageGallery={imageGallery} userID={userID} />
              </div>
            );
          })}
      </div>
      {isPagination && <Pagination numberPage={1} lengthPages={3} />}
    </div>
  );
};

export default Gallery;
