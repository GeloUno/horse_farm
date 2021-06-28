
import { render, screen } from '@testing-library/react';

import CommentsImage from './CommentsImage';
import { DevImagesData } from '../../DevUtility/imagesGalery';


DevImagesData.forEach((dataImage) => {

  describe(`CommentsImages for image: ${dataImage}`, () => {

    const userID = 1;

    const renderComponent = (
      <CommentsImage
        userID={userID}
        dataGalleryImageModal={dataImage}
      />
    )
    it('should ', () => {
      expect(1).not.toBe(2)
      expect(1).toBe(1)
    });
    it('should have Image comments component ', () => {
      render(renderComponent)
      const result = screen.getByTestId('commentsImageComponent')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    });
    it('should have comments body if are comments or null if no comment', () => {
      const { queryByTestId } = render(renderComponent)
      if (dataImage.comments && dataImage.comments.length > 0) {
        const result = screen.getAllByTestId('commentsBody')
        result.forEach((res) => {
          expect(res).toBeInTheDocument()
          expect(res).toBeVisible()
        })
      } else {
        expect(queryByTestId('commentsBody')).toBeNull()
      }
    });
    it('should have user nick comments or null if no comment', () => {
      const { queryByTestId } = render(renderComponent)
      if (dataImage.comments && dataImage.comments.length > 0) {
        const result = screen.getAllByTestId('commentsImageLabel')
        result.forEach((res, index) => {
          const nick = dataImage.comments![index].nick;
          expect(res).toHaveTextContent(`${nick}`)
        })
      } else {
        expect(queryByTestId('commentsImageLabel')).toBeNull()
      }
    });
    it('should have comments content', () => {
      const { queryByTestId } = render(renderComponent)
      if (dataImage.comments && dataImage.comments.length > 0) {
        const result = screen.getAllByTestId('commentsImageContent')
        result.forEach((res, index) => {
          const contentComment = dataImage.comments![index].comment;
          expect(res).toBeInTheDocument()
          expect(res).toBeVisible()
          expect(res).toHaveTextContent(contentComment)
        })
      } else {
        expect(queryByTestId('commentsImageLabel')).toBeNull()
      }
    });
    it('if user left comment should can delete it but not delete other comment', () => {
      const { queryByTestId } = render(renderComponent)
      if (dataImage.comments && dataImage.comments.length > 0) {
        const result = screen.getAllByTestId('commentsImageContent')
        result.forEach((res, index) => {
          const daleteBody = screen.queryByTestId('deleteCommentBody')
          const daleteIcon = screen.queryByTestId('deleteCommentIcon')
          if (dataImage.comments![index].uid = userID) {

            expect(daleteBody).toBeInTheDocument()
            expect(daleteBody).toBeVisible()

            expect(daleteIcon).toBeInTheDocument()
            expect(daleteIcon).toBeVisible()
            expect(daleteIcon).toHaveAttribute('data-icon', 'trash-alt')
            expect(daleteIcon).toHaveAttribute('data-prefix', 'fas')
            expect(daleteIcon).toHaveAttribute('class', 'svg-inline--fa fa-trash-alt fa-w-14 ')

          } else {
            expect(daleteBody).toBeNull()
            expect(daleteIcon).toBeNull()
          }
        })
      } else {
        expect(queryByTestId('deleteCommentUser')).toBeNull()
      }
    });
  })
})