import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TitleSection from './TitleSection';


Enzyme.configure({ adapter: new Adapter() });

describe('TiltleSection with optional addClassPage', () => {
  const titileSection = <TitleSection
    title='test title'
    addClassPage='example'
  />
  const wrapper = shallow(titileSection)

  test('should return with title', () => {
    const result = wrapper.find('.title-text').text()
    expect(result).toEqual('test title')
  });
  test('should return one class title-text', () => {
    const result = wrapper.find('.title-text')
    expect(result).toHaveLength(1)
  });
  test('should return one div class name title-section', () => {
    const result = wrapper.find('.title-section')
    expect(result).toHaveLength(1)
  });
  test('should return one div class name title-section with 02', () => {
    const result = wrapper.find('.example')
    expect(result).toHaveLength(1)
  });
});

describe('TiltleSection without optional props addClassPage ', () => {
  const titileSection = <TitleSection
    title='test second'
  />
  const wrapper = shallow(titileSection)

  test('should return with title', () => {
    const result = wrapper.find('.title-text').text()
    expect(result).toEqual('test second')
  });
  test('should return one class title-text', () => {
    const result = wrapper.find('.title-text')
    expect(result).toHaveLength(1)
  });
  test('should return one div class name title-section', () => {
    const result = wrapper.find('.title-section')
    expect(result).toHaveLength(1)
  });
  test('should return one div class name title-section with example', () => {
    const result = wrapper.find('.example')
    expect(result).not.toHaveLength(1)
    expect(result).toHaveLength(0)
  });
});