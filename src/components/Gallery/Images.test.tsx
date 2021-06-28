
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from './Images';
import { DevImagesData } from '../../DevUtility/imagesGalery';




const functionMock1 = jest.fn()
const functionMock2 = jest.fn()

describe('Gallery image component no user', () => {
  const emptyVoid = () => { }
  const renderComponent = (
    <Gallery
      galleryImageModalToggle={functionMock1}
      setDataGalleryImageModal={functionMock2}
      isGalleryImageModalShow={false}
      isAuth={false}
      userID={0}
      isPagination={false}
      imagesGallery={DevImagesData}
      setisScrollToAddComment={emptyVoid}
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
  it('should have grid images container', () => {
    render(renderComponent)
    const result = screen.getByTestId('gridImagesContainer')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have many of images body', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('gridImageBody')
    result.forEach((element) => {
      expect(element).toBeInTheDocument()
      expect(element).toBeVisible()
    })
  });
  it('should have ten images body', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('gridImageBody')
    expect(result.length).toBe(10)
  })
  it('images should have source all ten images', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('ImageSrc')
    result.forEach((element, index) => {
      expect(element).toHaveAttribute('src', `${DevImagesData[index].url}`)
    })
  });
  it('images should have like and comment component', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('likeAndCommentsComponent')
    result.forEach((element) => {
      expect(element).toBeInTheDocument()
      expect(element).toBeVisible()
    })
    expect(result.length).toBe(10)
  });
  it('image click should call methods to open modal and set data image', async () => {
    render(renderComponent)
    const result = screen.getAllByTestId('ImageSrc')
    result.forEach((element) => {
      fireEvent.click(element)
      expect(functionMock1).toHaveBeenCalled()
      expect(functionMock2).toHaveBeenCalled()
    })
    expect(functionMock1).toHaveBeenCalledTimes(10)
    expect(functionMock2).toHaveBeenCalledTimes(10)
  });
  it('should not have pagination', () => {
    render(renderComponent)
    const result = screen.queryByTestId('PaginationComponent')
    expect(result).toBeNull()
  })
});
describe('Gallery image component with user and pagination', () => {
  const emptyVoid = () => { }

  const renderComponent = (
    <Gallery
      galleryImageModalToggle={functionMock1}
      setDataGalleryImageModal={functionMock2}
      isGalleryImageModalShow={false}
      isAuth={true}
      userID={3}
      isPagination={true}
      imagesGallery={DevImagesData}
      setisScrollToAddComment={emptyVoid}
    />

  )
  it('should ', () => {
    expect(1).not.toBe(2)
    expect(1).toBe(1)
  });
  it('should have upload image component', () => {
    render(renderComponent)
    const result = screen.queryByTestId('ImagesUploadComponent')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have grid images container', () => {
    render(renderComponent)
    const result = screen.getByTestId('gridImagesContainer')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have many of images body', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('gridImageBody')
    result.forEach((element) => {
      expect(element).toBeInTheDocument()
      expect(element).toBeVisible()
    })
  });
  it('should have ten images body', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('gridImageBody')
    expect(result.length).toBe(10)
  })
  it('images should have source all ten images', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('ImageSrc')
    result.forEach((element, index) => {
      expect(element).toHaveAttribute('src', `${DevImagesData[index].url}`)
    })
  });
  it('image click should call methods to open modal and set data image', async () => {
    render(renderComponent)
    const result = screen.getAllByTestId('ImageSrc')
    result.forEach((element) => {
      fireEvent.click(element)
      expect(functionMock1).toHaveBeenCalled()
      expect(functionMock2).toHaveBeenCalled()
    })
    expect(functionMock1).toHaveBeenCalledTimes(10)
    expect(functionMock2).toHaveBeenCalledTimes(10)

  });
  it('images should have like and comment component', () => {
    render(renderComponent)
    const result = screen.getAllByTestId('likeAndCommentsComponent')
    result.forEach((element) => {
      expect(element).toBeInTheDocument()
      expect(element).toBeVisible()
    })
    expect(result.length).toBe(10)
  });
  it('should have pagination', () => {
    render(renderComponent)
    const result = screen.queryByTestId('PaginationComponent')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  })
});

