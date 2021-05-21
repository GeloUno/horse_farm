import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import PageNotFound from './PageNotFound';


Enzyme.configure({ adapter: new Adapter() });

describe('PageNotFound', () => {

  const pageNotFound = <PageNotFound />
  const wrapper = shallow(pageNotFound)

  test('should have class name PageNotFound', () => {
    const result = wrapper.hasClass('PageNotFound')
    expect(result).toBe(true)
  });
  test('should have length 1', () => {
    const result = wrapper.find('.PageNotFound')
    expect(result).toHaveLength(1)
  });
  test('should have text Ups ...coś poszło nie tak, ta strona nie istnieje :-(', () => {
    const result = wrapper.find('.PageNotFound').text()
    expect(result).toEqual('Ups ...coś poszło nie tak, ta strona nie istnieje :-(')
  });
  test('should text be in h2', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(1)
  });

})

