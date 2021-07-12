import React from 'react';
import Pagination from '../../Layout/Pagination';
import UploadImage from './UploadImage';
import LikesAndComments from './LikesAndComments';
import { IDataImage } from '../../DevUtility/imagesGalery';

/* FIXME: isAuth change to false in prod */


interface GalleryProps {

  galleryImageModalToggle(e: React.MouseEvent): void,
  setDataGalleryImageModal(data: IDataImage): void,
  isGalleryImageModalShow: boolean,
  isAuth: boolean,
  userID: number,
  isPagination?: boolean,
  imagesGallery: Array<IDataImage>,
  setisScrollToAddComment(): void,

}
//TODO:default value in props is only for testing
const Gallery: React.FC<GalleryProps> = ({
  galleryImageModalToggle,
  setDataGalleryImageModal,
  isGalleryImageModalShow,
  isAuth = true,
  userID = 3,
  isPagination = true,
  imagesGallery,
  setisScrollToAddComment,
}) => {
  return (
    <div>
      <div>{isAuth && <UploadImage />}</div>
      <div
        className="gridImages"
        data-testid="gridImagesContainer"
      >
        {imagesGallery &&
          imagesGallery.map((imageGallery, index) => {
            return (
              <div
                key={index}
                className="gridImage"
                data-testid="gridImageBody"
              >
                <img
                  className="accessToggleModalShow"
                  data-testid="ImageSrc"
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
