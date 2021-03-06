import React, { MutableRefObject, useState } from 'react';


function AddComment({ imageID, userID, inputAddCommentRef }: { imageID: number, userID: number, inputAddCommentRef: MutableRefObject<HTMLInputElement | undefined> }) {
  const [newComment, setNewComment] = useState<string>();

  const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
  };

  const inputRef = inputAddCommentRef as React.LegacyRef<HTMLInputElement> | undefined
  return (
    <div className="addCommentForm"
      data-testid='addCommentComponent'
    >
      <form action="">
        {
          // <label htmlFor="">dodaj komentarz ...</label>
        }

        <input
          ref={inputRef}
          className="comment addCommentInput"
          placeholder="dodaj komentarz ..."
          data-testid='addCommentInput'
          maxLength={150}
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
