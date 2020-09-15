import React from 'react';
import PropTypes from 'prop-types';

function CommentsImage({ dataGaleryImageModal, userID }) {
  return (
    <div>
      {dataGaleryImageModal.comments &&
        dataGaleryImageModal.comments.map((comment, index) => {
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
  dataGaleryImageModal: PropTypes.object.isRequired,
};

export default CommentsImage;
