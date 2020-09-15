import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddComment = ({ imageID, userID }) => {
  const [newComment, setNewComment] = useState();

  const handleChangeComment = (e) => {
    console.log('e :>> ', e.target.value);
    setNewComment(e.target.value);
  };
  return (
    <div className="addCommentForm">
      <form action="">
        {
          // <label htmlFor="">dodaj komentarz ...</label>
        }

        <input
          className="comment addCommentInput"
          placeholder="dodaj komentarz ..."
          maxLength="150"
          value={newComment}
          onChange={(e) => {
            handleChangeComment(e);
          }}
        />
      </form>
    </div>
  );
};

AddComment.propTypes = {};

export default AddComment;
