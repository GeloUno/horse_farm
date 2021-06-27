
import { render, screen } from '@testing-library/react';
import { DevImagesData } from '../../DevUtility/imagesGalery';
import LikesAndComments from './LikesAndComments';
import { selectFontAwesomIconColorIfUseLeftCommentOrLike, LikeOrComment } from './LikesAndComments';

DevImagesData.forEach((imageData) => {

  const functionMock1 = jest.fn()
  const functionMock2 = jest.fn()
  const functionMock3 = jest.fn()
  const userId = 1;
  describe(`Like and comments component for image: ${imageData.imageID}`, () => {
    const renderComponent = (
      <LikesAndComments
        imageGallery={imageData}
        userID={userId}
        isGalleryImageModalShow={true}
        galleryImageModalToggle={functionMock1}
        setDataGalleryImageModal={functionMock2}
        setisScrollToAddComment={functionMock3}
      />

    )
    it('should ', () => {
      expect(1).not.toBe(2)
      expect(1).toBe(1)
    });

    it('should have modal image container', () => {
      render(renderComponent)
      const result = screen.getByTestId('likeAndCommentsComponent')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have like And Number', () => {
      render(renderComponent)
      const result = screen.getByTestId('likeAndNumber')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('like should have Number', () => {
      render(renderComponent)
      const result = screen.getByTestId('likeAndNumber')
      expect(result).toHaveTextContent(`${imageData.like?.length || 0}`)
    });
    it('like should have icon', () => {
      render(renderComponent)
      const result = screen.getByTestId('FontAwesomeIconLike')
      expect(result).toHaveAttribute('class', 'svg-inline--fa fa-hat-cowboy fa-w-20 ')
      expect(result).toHaveAttribute('data-icon', "hat-cowboy")
      expect(result).toHaveAttribute('data-prefix', "fas")
    });
    it('Like icon should have color hsla(24, 53%, 42%, 1) if user left comment or default #707070', () => {
      render(renderComponent)
      const result = screen.getByTestId('FontAwesomeIconLike')
      expect(result).toHaveAttribute('color', selectFontAwesomIconColorIfUseLeftCommentOrLike(LikeOrComment.Like, imageData, userId))
    });

    it('should have comment And Number', () => {
      render(renderComponent)
      const result = screen.getByTestId('CommentsIconAndNumber')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('like should have Number', () => {
      render(renderComponent)
      const result = screen.getByTestId('CommentsIconAndNumber')
      expect(result).toHaveTextContent(`${imageData.comments?.length || 0}`)
    });
    it('Comment should have icon', () => {
      render(renderComponent)
      const result = screen.getByTestId('FontAwesomeIconComments')
      expect(result).toHaveAttribute('class', 'svg-inline--fa fa-comments fa-w-18 ')
      expect(result).toHaveAttribute('data-icon', "comments")
      expect(result).toHaveAttribute('data-prefix', "fas")
    });
    it('Comment icon should have color hsla(94, 30%, 47%, 1) if user left comment or default #707070', () => {
      render(renderComponent)
      const result = screen.getByTestId('FontAwesomeIconComments')
      expect(result).toHaveAttribute('color', selectFontAwesomIconColorIfUseLeftCommentOrLike(LikeOrComment.Comment, imageData, userId))
    });
  });

})