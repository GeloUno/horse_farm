import React from 'react';
import PropTypes from 'prop-types';

const isUserIdInArrayOfObjects = (data, userId) => {
  if (data.filter((lik) => lik['uid'] === userId).length > 0) {
    return true;
  } else {
    return false;
  }
};

const LikesAndComments = ({
  imageGallery,
  userID = 0,
  isGalleryImageModalShow,
  galleryImageModalToggle,
  setDataGalleryImageModal,
  setisScrollToAddComment,
}) => {
  return (
    <div className="likeAndComments">
      <div className="numberLike number">
        {imageGallery.like &&
          isUserIdInArrayOfObjects(imageGallery.like, userID)}
        <i
          className="fas fa-hat-cowboy"
          style={
            imageGallery.like &&
            isUserIdInArrayOfObjects(imageGallery.like, userID)
              ? { color: 'hsla(24, 53%, 42%, 1)' }
              : { color: '#707070' }
          }
        ></i>
        {(imageGallery.like && imageGallery.like.length) || 0}
      </div>
      <div
        className={
          !isGalleryImageModalShow
            ? 'accessToggleModalShow numberComments number'
            : 'numberComments number'
        }
        onClick={(e) => {
          if (!isGalleryImageModalShow) {
            setDataGalleryImageModal(imageGallery);
            galleryImageModalToggle(e);
          }
          setisScrollToAddComment(true);
        }}
      >
        <i
          className={
            !isGalleryImageModalShow
              ? 'accessToggleModalShow fas fa-comments'
              : 'fas fa-comments'
          }
          style={
            imageGallery.comments &&
            isUserIdInArrayOfObjects(imageGallery.comments, userID)
              ? { color: 'hsla(94, 30%, 47%, 1)' }
              : { color: '#707070' }
          }
        ></i>
        {(imageGallery.comments && imageGallery.comments.length) || 0}
      </div>
    </div>
  );
};

LikesAndComments.propTypes = {
  imageGallery: PropTypes.object.isRequired,
  userID: PropTypes.any.isRequired, // FIXME: I think it will be a string you will see when data will come from DB
};

export default LikesAndComments;
