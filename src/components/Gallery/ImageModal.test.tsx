
import { render, screen, fireEvent } from '@testing-library/react';
import { DevImagesData } from '../../DevUtility/imagesGalery';
import GalleryFullScreenImage from './ImageModal';


DevImagesData.forEach((ImageData) => {

  const functionMock1 = jest.fn()
  const functionMock2 = jest.fn()
  const functionMock3 = jest.fn()

  describe(`modal image component for image number:${ImageData.imageID}`, () => {
    const renderComponent = (
      <GalleryFullScreenImage
        dataGalleryImageModal={ImageData}
        galleryImageModalToggle={functionMock1}
        isGalleryImageModalShow={true}
        userID={0}
        isScrollToAddComment={false}
        setDataGalleryImageModal={functionMock2}
        setisScrollToAddComment={functionMock3}
      />

    )
    it('should ', () => {
      expect(1).not.toBe(2)
      expect(1).toBe(1)
    });
    it('should not have upload image component', () => {
      render(renderComponent)
      const result = screen.queryByTestId('ImagesUploadComponent')
      expect(result).toBeNull()
    });
    it('should have modal image container', () => {
      render(renderComponent)
      const result = screen.getByTestId('modalImageContainer')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()

    });
    it('should call gallery image modal toggle after click', () => {
      render(renderComponent)
      const result = screen.getByTestId('modalImageContainer')
      fireEvent.click(result)
      expect(functionMock1).toHaveBeenCalled()
      expect(functionMock1).toHaveBeenCalledTimes(1)
    });
    it('should have image source', () => {
      render(renderComponent)
      const result = screen.getByTestId('ImageModalSrc')
      expect(result).toHaveAttribute('src', `${ImageData.url}`)
    })
    it('should have like and comment component', () => {
      render(renderComponent)
      const result = screen.getByTestId('likeAndCommentsComponent')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    })
    it('should have comments component', () => {
      render(renderComponent)
      const result = screen.getByTestId('commentsImageComponent')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    })
    it('should have add comment component', () => {
      render(renderComponent)
      const result = screen.getByTestId('addCommentComponent')
      expect(result).toBeInTheDocument()
      expect(result).toBeVisible()
    })

  });

})