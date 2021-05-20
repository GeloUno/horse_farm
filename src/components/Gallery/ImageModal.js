import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import LikesAndComments from './LikesAndComments';
import CommentsImage from './CommentsImage';
import AddComment from './AddComment';

const GalleryFullScreenImage = ({
  dataGalleryImageModal,
  galleryImageModalToggle,
  isGalleryImageModalShow,
  userID,
  isScrollToAddComment,
  setisScrollToAddComment,
}) => {
  const inputAddCommentRef = useRef();

  const handleClikScrollToView = () => {
    inputAddCommentRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    isScrollToAddComment && handleClikScrollToView();
    isScrollToAddComment && setisScrollToAddComment(false);

    return () => {
      setisScrollToAddComment(false);
    };
  }, [isScrollToAddComment]);

  return (
    <div
      className="modalBackground modalContainerCenter accessToggleModalShow"
      onClick={(e) => {
        galleryImageModalToggle(e);
      }}
    >
      <div className="loginModal gridImage modalImageGallery">
        <img src={dataGalleryImageModal.url} alt="zdjecie koni" />
        <LikesAndComments
          imageGallery={dataGalleryImageModal}
          isGalleryImageModalShow={isGalleryImageModalShow}
          galleryImageModalToggle={galleryImageModalToggle}
          userID={userID}
          setisScrollToAddComment={setisScrollToAddComment}
        />
        <CommentsImage
          dataGalleryImageModal={dataGalleryImageModal}
          userID={userID}
        />
        <AddComment
          imageID={dataGalleryImageModal.imageID}
          userID={userID}
          inputAddCommentRef={inputAddCommentRef}
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
