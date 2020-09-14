import React from 'react';
import PropTypes from 'prop-types';
import LikesAndComments from './LikesAndComments';

const GaleryFullScreenImage = ({
  dataGaleryImageModal,
  galeryImageModalToggle,
  userID,
}) => {
  return (
    <div
      className=" modalBackground modalContainerCenter"
      onClick={(e) => {
        galeryImageModalToggle(e);
      }}
    >
      <div className="loginModal gridImage modalImage">
        <img src={dataGaleryImageModal.url} alt="zdjecie koni" />
        {console.log(dataGaleryImageModal)}
        <LikesAndComments imageGalery={dataGaleryImageModal} userID={userID} />
        {dataGaleryImageModal.comments &&
          dataGaleryImageModal.comments.map((comment, index) => {
            return <div key={index}>{comment.comment}</div>;
          })}
      </div>
    </div>
  );
};

GaleryFullScreenImage.propTypes = {
  dataGaleryImageModal: PropTypes.object.isRequired,
  galeryImageModalToggle: PropTypes.func.isRequired,
};

export default GaleryFullScreenImage;
