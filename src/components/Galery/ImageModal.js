import React from 'react';
import PropTypes from 'prop-types';
import LikesAndComments from './LikesAndComments';
import CommentsImage from './CommentsImage';
import AddComment from './AddComment';

const GaleryFullScreenImage = ({
  dataGaleryImageModal,
  galeryImageModalToggle,
  userID,
}) => {
  return (
    <div
      className=" modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        galeryImageModalToggle(e);
      }}
    >
      <div className="loginModal gridImage modalImageGalery">
        <img src={dataGaleryImageModal.url} alt="zdjecie koni" />
        <LikesAndComments imageGalery={dataGaleryImageModal} userID={userID} />
        <AddComment imageID={dataGaleryImageModal.imageID} userID={userID} />
        <CommentsImage
          dataGaleryImageModal={dataGaleryImageModal}
          userID={userID}
        />
      </div>
    </div>
  );
};

GaleryFullScreenImage.propTypes = {
  dataGaleryImageModal: PropTypes.object.isRequired,
  galeryImageModalToggle: PropTypes.func.isRequired,
};

export default GaleryFullScreenImage;
