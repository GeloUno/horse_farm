import React from 'react';
import { IDataImage, ILike, IComment } from '../../DevUtility/imagesGalery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy, faComments } from '@fortawesome/free-solid-svg-icons';


const isUserIdInArrayOfObjects = (paramData: Array<ILike> | Array<IComment>, userId: number): boolean => {
  if (paramData.filter((data) => data['uid'] === userId).length > 0) {
    return true;
  } else {
    return false;
  }
};

export enum LikeOrComment {
  Like,
  Comment,
}

export const selectFontAwesomIconColorIfUseLeftCommentOrLike = (likeOrComment: LikeOrComment, imageGallery: IDataImage, userID: number): string => {
  if (likeOrComment === LikeOrComment.Comment) {
    if (imageGallery.comments !== undefined) {
      if (isUserIdInArrayOfObjects(imageGallery.comments, userID)) {
        return 'hsla(94, 30%, 47%, 1)'
      }
    }
  } else if (likeOrComment === LikeOrComment.Like) {
    if (imageGallery.like !== undefined) {
      if (isUserIdInArrayOfObjects(imageGallery.like, userID)) {
        return 'hsla(24, 53%, 42%, 1)'
      }
    }
  }
  return '#707070'
}





interface LikesAndCommentsProps {
  imageGallery: IDataImage,
  userID: number,
  isGalleryImageModalShow: boolean,
  galleryImageModalToggle(e: React.MouseEvent): void,
  setisScrollToAddComment(param: boolean): void
  setDataGalleryImageModal(ImageModaldata: IDataImage): void,
}


const LikesAndComments: React.FC<LikesAndCommentsProps> = ({
  imageGallery,
  userID = 0,
  isGalleryImageModalShow,
  galleryImageModalToggle,
  setDataGalleryImageModal,
  setisScrollToAddComment,
}) => {
  return (
    <div
      className="likeAndComments"
      data-testid="likeAndCommentsComponent"
    >
      <div
        className="numberLike number"
        data-testid="likeAndNumber"
      >
        {imageGallery.like && isUserIdInArrayOfObjects(imageGallery.like, userID)
        }
        <FontAwesomeIcon
          icon={faHatCowboy}
          data-testid="FontAwesomeIconLike"
          color={selectFontAwesomIconColorIfUseLeftCommentOrLike(LikeOrComment.Like, imageGallery, userID)}

        />
        {(imageGallery.like && imageGallery.like.length) || 0}
      </div>
      <div
        data-testid="CommentsIconAndNumber"
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
        <FontAwesomeIcon
          data-testid="FontAwesomeIconComments"
          className={
            !isGalleryImageModalShow
              ? 'accessToggleModalShow'
              : ''
          }
          icon={faComments}
          color={selectFontAwesomIconColorIfUseLeftCommentOrLike(LikeOrComment.Comment, imageGallery, userID)} />
        {(imageGallery.comments && imageGallery.comments.length) || 0}
      </div>
    </div>
  );
};

export default LikesAndComments;
