import React, { useState } from 'react';

const AddComment = ({ imageID, userID }) => {
  const [newComment, setNewComment] = useState();

  const handleChangeComment = (e) => {
    // console.log('e :>> ', e.target.value);
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

export default AddComment;
