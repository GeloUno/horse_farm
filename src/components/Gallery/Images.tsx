import React from 'react';
import Pagination from '../../Layout/Pagination';
import UploadImage from './UploadImage';
import LikesAndComments from './LikesAndComments';
import { DevImagesData, IDataImage } from '../../DevUtility/imagesGalery';

/* FIXME: isAuth change to false in prod */


interface GalleryProps {

  galleryImageModalToggle(e: React.MouseEvent): void,
  setDataGalleryImageModal(data: IDataImage): void,
  isGalleryImageModalShow: boolean,
  isAuth(): void,
  userID: number,
  isPagination: boolean,
  imagesGallery: Array<IDataImage>,
  setisScrollToAddComment(): void,
}

const Gallery: React.FC<GalleryProps> = ({
  galleryImageModalToggle,
  setDataGalleryImageModal,
  isGalleryImageModalShow,
  isAuth = true,
  userID = 0,
  isPagination = true,
  imagesGallery = DevImagesData,
  setisScrollToAddComment,
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
                <LikesAndComments
                  imageGallery={imageGallery}
                  userID={userID}
                  galleryImageModalToggle={galleryImageModalToggle}
                  setDataGalleryImageModal={setDataGalleryImageModal}
                  setisScrollToAddComment={setisScrollToAddComment}
                  isGalleryImageModalShow={isGalleryImageModalShow}
                />
              </div>
            );
          })}
      </div>
      {isPagination && <Pagination numberPage={1} lengthPages={3} />}
    </div>
  );
};

export default Gallery;
