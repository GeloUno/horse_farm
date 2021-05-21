import React from 'react';
import PropTypes from 'prop-types';

function CommentsImage({ dataGalleryImageModal, userID }) {
  return (
    <div>
      {dataGalleryImageModal.comments &&
        dataGalleryImageModal.comments.map((comment, index) => {
          return (
            <div className="likesAndComments" key={index}>
              <label className="userNickComment"> {comment.nick}</label>
              <div className="comment" key={index}>
                {comment.comment}
                {comment.uid === userID && (
                  <div className="deleteComment">
                    <i className="far fa-trash-alt"></i>
                  </div>
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}

CommentsImage.propTypes = {
  dataGalleryImageModal: PropTypes.object.isRequired,
};

export default CommentsImage;
