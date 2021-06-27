
import PropTypes from 'prop-types';
import { IDataImage } from '../../DevUtility/imagesGalery';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CommentsImage({ dataGalleryImageModal, userID }: { dataGalleryImageModal: IDataImage, userID: number }) {
  return (
    <div data-testid='commentsImageComponent'>
      {dataGalleryImageModal.comments &&
        dataGalleryImageModal.comments.map((comment, index) => {
          return (
            <div className="likesAndComments" key={index}>
              <label className="userNickComment"> {comment.nick}</label>
              <div className="comment" key={index}>
                {comment.comment}
                {comment.uid === userID && (
                  <div className="deleteComment">
                    <FontAwesomeIcon icon={faTrashAlt} />
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
