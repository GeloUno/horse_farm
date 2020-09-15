import React from 'react';
import PropTypes from 'prop-types';
import LikesAndComments from './LikesAndComments';
import CommentsImage from './CommentsImage';
import AddComment from './AddComment';

const GalleryFullScreenImage = ({
  dataGalleryImageModal,
  galleryImageModalToggle,
  userID,
}) => {
  return (
    <div
      className=" modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        galleryImageModalToggle(e);
      }}
    >
      <div className="loginModal gridImage modalImageGallery">
        <img src={dataGalleryImageModal.url} alt="zdjecie koni" />
        <LikesAndComments
          imageGallery={dataGalleryImageModal}
          userID={userID}
        />
        <AddComment imageID={dataGalleryImageModal.imageID} userID={userID} />
        <CommentsImage
          dataGalleryImageModal={dataGalleryImageModal}
          userID={userID}
        />
      </div>
    </div>
  );
};

GalleryFullScreenImage.propTypes = {
  dataGalleryImageModal: PropTypes.object.isRequired,
  galleryImageModalToggle: PropTypes.func.isRequired,
};

export default GalleryFullScreenImage;
