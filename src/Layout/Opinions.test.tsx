import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Opinions from './Opinions';



Enzyme.configure({ adapter: new Adapter() });

describe('Opinions component', () => {

  const opinions = <Opinions />

  const wrapper = shallow(opinions)

  test('should have type component as section ', () => {
    const result = wrapper.type()
    expect(result).toEqual('section')
  });

  test('should have one header', () => {
    const result = wrapper.find('header')
    expect(result).toHaveLength(1)
  })

  test('should have one header', () => {
    const result = wrapper.find('section')
    expect(result).toHaveLength(2)
  })

  test('should have four OpinionUser', () => {
    const result = wrapper.find('OpinionUser')
    expect(result).toHaveLength(4)
  })

  test('should have four h2', () => {
    const result = wrapper.find('h2')
    expect(result).toHaveLength(1)
  })
  test('should section have class name container', () => {
    const result = wrapper.find('section').first().hasClass('container')
    expect(result).toBe(true)
  })
  test('should section have class name container-opinion', () => {
    const result = wrapper.find('section').first().hasClass('container-opinion')
    expect(result).toBe(true)
  })
  test('should section have class name flex-direction-col', () => {
    const result = wrapper.find('section').first().hasClass('flex-direction-col')
    expect(result).toBe(true)
  })
  test('should header have class name flex-direction-col', () => {
    const result = wrapper.find('header').hasClass('title-header')
    expect(result).toBe(true)
  })
  test('should h2 have class name flex-direction-col', () => {
    const result = wrapper.find('header').hasClass('title-header')
    expect(result).toBe(true)
  })
  test('should second section have class name opinios-body', () => {
    const result = wrapper.find('section').last().hasClass('opinios-body')
    expect(result).toBe(true)
  })
  test('should second section have class name flex-direction-row', () => {
    const result = wrapper.find('section').last().hasClass('flex-direction-row')
    expect(result).toBe(true)
  })

});
