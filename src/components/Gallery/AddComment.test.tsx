
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AddComment from './AddComment';
import React from 'react';



describe(`Add comment component`, () => {
  const mockScrollFn = jest.fn()
  const ref = {
    current: {
      scrollTo: mockScrollFn
    }
  }
  const imageID = 1;
  const userID = 1;
  const inputRef: any = jest.spyOn(React, 'useRef').mockReturnValue(ref)
  // const inputRef = React.useRef()
  // const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const renderComponent = (
    <AddComment
      imageID={imageID}
      userID={userID}
      inputAddCommentRef={inputRef}
    />
  )
  it('should ', () => {
    expect(1).not.toBe(2)
    expect(1).toBe(1)
  });
  it('should have body add commpent ', () => {
    render(renderComponent)
    const result = screen.getByTestId('addCommentComponent')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('should have input comment ', () => {
    render(renderComponent)
    const result = screen.getByTestId('addCommentInput')
    expect(result).toBeInTheDocument()
    expect(result).toBeVisible()
  });
  it('input comment value should be empty ', async () => {
    render(renderComponent)
    const result = screen.getByTestId('addCommentInput')
    expect(result).toHaveAttribute('value', '')

  });
  // it('input comment should write some text ', async () => {
  //   render(renderComponent)
  //   const result = screen.getByTestId('addCommentInput')
  //   await waitFor(async () => {
  //     fireEvent.change(result, { target: { value: 'some text comment' } })
  //   })
  //   expect(result).toHaveAttribute('value', 'some text comment')
  // });
})
