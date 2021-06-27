import React, { useEffect, useRef } from 'react';
import LikesAndComments from './LikesAndComments';
import CommentsImage from './CommentsImage';
import AddComment from './AddComment';
import { IDataImage } from '../../DevUtility/imagesGalery';

interface GalleryFullScreenImageProps {
  dataGalleryImageModal: IDataImage,
  galleryImageModalToggle(e: React.MouseEvent): void,
  isGalleryImageModalShow: boolean,
  userID: number,
  isScrollToAddComment: boolean,
  setisScrollToAddComment(param: boolean): void,
  setDataGalleryImageModal(image: IDataImage): void
}


const GalleryFullScreenImage: React.FC<GalleryFullScreenImageProps> = ({
  dataGalleryImageModal,
  galleryImageModalToggle,
  isGalleryImageModalShow,
  userID,
  isScrollToAddComment,
  setisScrollToAddComment,
  setDataGalleryImageModal,
}) => {
  const inputAddCommentRef = useRef<HTMLInputElement>();

  const handleClikScrollToView = () => {
    if (inputAddCommentRef !== undefined && inputAddCommentRef.current !== undefined) {
      inputAddCommentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
      data-testid='modalImageContainer'
      onClick={(e) => {
        galleryImageModalToggle(e);
      }}
    >
      <div className="loginModal gridImage modalImageGallery"
        data-testid='modalImageBody'
      >
        <img
          src={dataGalleryImageModal.url}
          alt="zdjecie koni"
          data-testid='ImageModalSrc'
        />
        <LikesAndComments
          imageGallery={dataGalleryImageModal}
          userID={userID}
          isGalleryImageModalShow={isGalleryImageModalShow}
          galleryImageModalToggle={galleryImageModalToggle}
          setisScrollToAddComment={setisScrollToAddComment}
          setDataGalleryImageModal={setDataGalleryImageModal}
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

export default GalleryFullScreenImage;
