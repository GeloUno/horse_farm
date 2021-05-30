import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import OpinionUser from './OpinionUser';


Enzyme.configure({ adapter: new Adapter() });

describe('Opinion User', () => {

  const nick = 'test nick user'
  const description = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, beatae. Dolores non, asperiores, harum, nisi quos necessitatibus placeat rerum magnam officia amet sint. Rem, aut.`
  const sourceImg = 'www.test.com.uk/test.png'


  const opinionUser = <OpinionUser
    nick={nick}
    description={description}
    sourceImage={sourceImg}
  />
  const wrapper = shallow(opinionUser);

  // console.log("<- LOG -> file: OpinionUser.test.tsx -> line 23 -> describe -> wrapper", wrapper.props())

  test('should have article', () => {
    const result = wrapper.find('article')
    expect(result).toHaveLength(1)
  });
  test('should have article', () => {
    const result = wrapper.type()
    expect(result).toEqual('article')
  });

  test('should article have class name article-body', () => {
    const result = wrapper.hasClass('article-body')
    expect(result).toBe(true)
  });
  test('should article have class name flex-direction-col', () => {
    const result = wrapper.hasClass('flex-direction-col')
    expect(result).toBe(true)
  });
  test('should article have 4 div', () => {
    const result = wrapper.find('div')
    expect(result).toHaveLength(4)
  });
  test('should article have 1 img', () => {
    const result = wrapper.find('img')
    expect(result).toHaveLength(1)
  });
  test('should article have 1 h2', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(1)
  });
  test('should article have 1 p', () => {
    const result = wrapper.find('p')
    expect(result).toHaveLength(2)
  });
  test('should article have 1 link', () => {
    const result = wrapper.find('link')
    expect(result).toHaveLength(1)
  });
  test('should article have 1 i', () => {
    const result = wrapper.find('i')
    expect(result).toHaveLength(1)
  });

  test('should img have class name image-user', () => {
    const result = wrapper.find('img').prop('className')
    expect(result).toEqual('image-user')
  });

  test('should img have class name src', () => {
    const result = wrapper.find('img').prop('src')
    expect(result).toEqual(sourceImg)
  });

  test('should img have alt', () => {
    const result = wrapper.find('img').prop('alt')
    expect(result).toEqual('zdjęcie użytkownika')
  });

  test('should nick-user have children with type h2', () => {
    const result = wrapper.find('.nick-user').children().type()
    expect(result).toEqual('h2')
  });
  // test('should nick-user have text', () => {

  //   const initialStateUserComponentForTest = { isLoadedData: true }

  //   React.useState = jest.fn().mockReturnValueOnce([{ initialStateUserComponentForTest }, {}])
  //   wrapper.update()
  //   // const wrapper1 = shallow(opinionUser);
  //   const result = wrapper.find('.nick-user').text()
  //   expect(result).toEqual(nick)
  // });
  test('should description have type p', () => {
    const result = wrapper.find('.description').children().type()
    expect(result).toEqual('p')
  });
  // test('should description have text', () => {
  //   const result = wrapper.find('.description').children().text()
  //   expect(result).toEqual(description)
  // });

  // test('should contact-link have types link and p', () => {
  //   const result = wrapper.find('.contact-link').children().first().type()
  //   expect(result).toEqual('link')
  // });
  test('should contact-link have types link and p', () => {
    const result = wrapper.find('.contact-link').children().last().type()
    expect(result).toEqual('p')
  });

});
