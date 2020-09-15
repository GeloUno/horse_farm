import React from 'react';
import PropTypes from 'prop-types';

const isUserIdIsInArrayOfObjects = (data, userId) => {
  if (data.filter((lik) => lik['uid'] === userId).length > 0) {
    return true;
  } else {
    return false;
  }
};

const LikesAndComments = ({ imageGallery, userID = 0 }) => {
  return (
    <div className="likeAndComments">
      <div className="numberLike number">
        {imageGallery.like &&
          isUserIdIsInArrayOfObjects(imageGallery.like, userID)}
        <i
          className="fas fa-hat-cowboy"
          style={
            imageGallery.like &&
            isUserIdIsInArrayOfObjects(imageGallery.like, userID)
              ? { color: 'hsla(24, 53%, 42%, 1)' }
              : { color: '#707070' }
          }
        ></i>
        {(imageGallery.like && imageGallery.like.length) || 0}
      </div>
      <div className="numberComments number">
        <i
          className="fas fa-comments"
          style={
            imageGallery.comments &&
            isUserIdIsInArrayOfObjects(imageGallery.comments, userID)
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
