import React from 'react';
import PropTypes from 'prop-types';

const GaleryFullScreenImage = ({
  dataGaleryImageModal,
  galeryImageModalToggle,
  user,
}) => {
  return (
    <div
      //  className="modalBackground modalContainerCenter"
      className="Modal_image modalBackground modalContainerCenter"
      onClick={(e) => {
        galeryImageModalToggle(e);
      }}
    >
      <div className="loginModal gridImage modalImage">
        <img src={dataGaleryImageModal.url} alt="zdjecie koni" />

        {console.log('imageData', dataGaleryImageModal)}
      </div>
    </div>
  );
};

GaleryFullScreenImage.propTypes = {
  dataGaleryImageModal: PropTypes.object.isRequired,
  galeryImageModalToggle: PropTypes.func.isRequired,
};

export default GaleryFullScreenImage;
