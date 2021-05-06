import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Pagination from './Pagination';



Enzyme.configure({ adapter: new Adapter() });

describe('Pagination component props: lengthPages 1 no show pagination component', () => {

  const pagination = <Pagination
    lengthPages={1}
    numberPage={1}
  // setNumbetPages={1}
  />

  const wrapper = shallow(pagination);

  test('should not return any button ', () => {
    const result = wrapper.find('button')
    expect(result).toHaveLength(0)
  });
  test('should not return div with paggination class ', () => {
    const result = wrapper.find('.paggination')
    expect(result).toHaveLength(0)
  });
  test('should not return button with class prevArrowButton', () => {
    const result = wrapper.find('.prevArrowButton')
    expect(result).toHaveLength(0)
  });
  test('should not return button with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(0)
  });
  test('should not return button with class currentNumberButton', () => {
    const result = wrapper.find('.currentNumberButton')
    expect(result).toHaveLength(0)
  });
  test('should not return button with class nextNumberButton', () => {
    const result = wrapper.find('.nextNumberButton')
    expect(result).toHaveLength(0)
  });
  test('should not return button with class nextArrowButton', () => {
    const result = wrapper.find('.nextArrowButton')
    expect(result).toHaveLength(0)
  });

});


describe('Pagination component props: lengthPages 2 numberPage 1 should return pagination component', () => {

  const pagination = <Pagination
    lengthPages={2}
    numberPage={1}
  // setNumbetPages={1}
  />

  const wrapper = shallow(pagination);

  test('should return 7 button ', () => {
    const result = wrapper.find('button')
    expect(result).toHaveLength(7)
  });
  test('should return div with paggination class ', () => {
    const result = wrapper.find('.paggination')
    expect(result).toHaveLength(1)
  });
  test('should return one button with class prevArrowButton', () => {
    const result = wrapper.find('.prevArrowButton')
    expect(result).toHaveLength(1)
  });

  test('should button with class prevArrowButton be disabled', () => {
    const result = wrapper.find('.prevArrowButton').props().disabled
    expect(result).toBe(true)
  });
  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });
  test('should return two buttons with class prevNumberButton and should be hidden', () => {
    const result = wrapper.find('.prevNumberButton')
    result.map(data => {
      const resultProps = data.prop('hidden')
      expect(resultProps).toBe(true)
    })
    expect(result).toHaveLength(2)
  });
  test('should return one button with class currentNumberButton', () => {
    const result = wrapper.find('.currentNumberButton')
    expect(result).toHaveLength(1)
  });
  test('should button with class currentNumberButton have text 1', () => {
    const result = wrapper.find('.currentNumberButton').text()
    expect(result).toBe('1')
  });
  test('should button with class currentNumberButton have style font weight 600', () => {
    const result = wrapper.find('.currentNumberButton').prop('style')
    expect(result).toEqual({ "fontWeight": 600 })
  });

  test('should return two buttons with class nextNumberButton', () => {
    const result = wrapper.find('.nextNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should first button with class nextNumberButton not be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').first().prop('hidden')
    expect(result).toEqual(false)
  });

  test('should first button with class nextNumberButton have text 2', () => {
    const result = wrapper.find('.nextNumberButton').first().text()
    expect(result).toEqual('2')
  });

  test('should second button with class nextNumberButton be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').last().prop('hidden')
    expect(result).toEqual(true)
  });

  test('should second button with class nextNumberButton have text 3', () => {
    const result = wrapper.find('.nextNumberButton').last().text()
    expect(result).toEqual('3')
  });

  test('should not return button with class nextArrowButton', () => {
    const result = wrapper.find('.nextArrowButton')
    expect(result).toHaveLength(1)
  });

});

describe('Pagination component props: lengthPages 2 numberPage 2 should return pagination component', () => {

  const pagination = <Pagination
    lengthPages={2}
    numberPage={2}
  // setNumbetPages={1}
  />

  const wrapper = shallow(pagination);

  test('should return 7 button ', () => {
    const result = wrapper.find('button')
    expect(result).toHaveLength(7)
  });
  test('should return div with paggination class ', () => {
    const result = wrapper.find('.paggination')
    expect(result).toHaveLength(1)
  });
  test('should return one button with class prevArrowButton', () => {
    const result = wrapper.find('.prevArrowButton')
    expect(result).toHaveLength(1)
  });
  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return first buttons with class prevNumberButton be hidden', () => {
    const result = wrapper.find('.prevNumberButton').first().props().hidden
    expect(result).toBe(true)
  });
  test('should return second buttons with class prevNumberButton not be hidden', () => {
    const result = wrapper.find('.prevNumberButton').last().props().hidden
    expect(result).toBe(false)
  });

  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return one button with class currentNumberButton', () => {
    const result = wrapper.find('.currentNumberButton')
    expect(result).toHaveLength(1)
  });
  test('should button with class currentNumberButton have text 2', () => {
    const result = wrapper.find('.currentNumberButton').text()
    expect(result).toBe('2')
  });
  test('should button with class currentNumberButton have style font weight 600', () => {
    const result = wrapper.find('.currentNumberButton').prop('style')
    expect(result).toEqual({ "fontWeight": 600 })
  });

  test('should return two buttons with class nextNumberButton', () => {
    const result = wrapper.find('.nextNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should first button with class nextNumberButton not be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').first().prop('hidden')
    expect(result).toEqual(true)
  });

  test('should first button with class nextNumberButton have text 3', () => {
    const result = wrapper.find('.nextNumberButton').first().text()
    expect(result).toEqual('3')
  });

  test('should second button with class nextNumberButton have text 4', () => {
    const result = wrapper.find('.nextNumberButton').last().text()
    expect(result).toEqual('4')
  });

  test('should second button with class nextNumberButton be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').last().prop('hidden')
    expect(result).toEqual(true)
  });


  test('should return button with class nextArrowButton', () => {
    const result = wrapper.find('.nextArrowButton')
    expect(result).toHaveLength(1)
  });
  test('should return button with class nextArrowButton be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props()['disabled']
    expect(result).toBe(true)
  });
  test('should return button with class nextArrowButton be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props().disabled
    expect(result).toBe(true)
  });

});

describe('Pagination component props: lengthPages 3 numberPage 1 should return pagination component', () => {

  const pagination = <Pagination
    lengthPages={3}
    numberPage={1}
  // setNumbetPages={1}
  />

  const wrapper = shallow(pagination);

  test('should return 7 button ', () => {
    const result = wrapper.find('button')
    expect(result).toHaveLength(7)
  });
  test('should return div with paggination class ', () => {
    const result = wrapper.find('.paggination')
    expect(result).toHaveLength(1)
  });
  test('should return one button with class prevArrowButton', () => {
    const result = wrapper.find('.prevArrowButton')
    expect(result).toHaveLength(1)
  });

  test('should return button with class prevArrowButton be disabled', () => {
    const result = wrapper.find('.prevArrowButton').props().disabled
    expect(result).toBe(true)
  });
  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return first buttons with class prevNumberButton be hidden', () => {
    const result = wrapper.find('.prevNumberButton').first().props().hidden
    expect(result).toBe(true)
  });
  test('should return second buttons with class prevNumberButton be hidden', () => {
    const result = wrapper.find('.prevNumberButton').last().props().hidden
    expect(result).toBe(true)
  });

  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return one button with class currentNumberButton', () => {
    const result = wrapper.find('.currentNumberButton')
    expect(result).toHaveLength(1)
  });
  test('should button with class currentNumberButton have text 1', () => {
    const result = wrapper.find('.currentNumberButton').text()
    expect(result).toBe('1')
  });
  test('should button with class currentNumberButton have style font weight 600', () => {
    const result = wrapper.find('.currentNumberButton').prop('style')
    expect(result).toEqual({ "fontWeight": 600 })
  });

  test('should return two buttons with class nextNumberButton', () => {
    const result = wrapper.find('.nextNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should first button with class nextNumberButton not be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').first().prop('hidden')
    expect(result).toEqual(false)
  });

  test('should first button with class nextNumberButton have text 2', () => {
    const result = wrapper.find('.nextNumberButton').first().text()
    expect(result).toEqual('2')
  });

  test('should second button with class nextNumberButton have text 3', () => {
    const result = wrapper.find('.nextNumberButton').last().text()
    expect(result).toEqual('3')
  });

  test('should second button with class nextNumberButton not be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').last().prop('hidden')
    expect(result).toEqual(false)
  });


  test('should return button with class nextArrowButton', () => {
    const result = wrapper.find('.nextArrowButton')
    expect(result).toHaveLength(1)
  });
  test('should return button with class nextArrowButton not be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props()['disabled']
    expect(result).toBe(false)
  });
  test('should return button with class nextArrowButton not be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props().disabled
    expect(result).toBe(false)
  });

});

describe('Pagination component props: lengthPages 3 numberPage 2 should return pagination component', () => {

  const pagination = <Pagination
    lengthPages={3}
    numberPage={2}
  // setNumbetPages={1}
  />

  const wrapper = shallow(pagination);

  test('should return 7 button ', () => {
    const result = wrapper.find('button')
    expect(result).toHaveLength(7)
  });
  test('should return div with paggination class ', () => {
    const result = wrapper.find('.paggination')
    expect(result).toHaveLength(1)
  });
  test('should return one button with class prevArrowButton', () => {
    const result = wrapper.find('.prevArrowButton')
    expect(result).toHaveLength(1)
  });

  test('should return button with class prevArrowButton not be disabled', () => {
    const result = wrapper.find('.prevArrowButton').props().disabled
    expect(result).toBe(false)
  });
  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return first buttons with class prevNumberButton be hidden', () => {
    const result = wrapper.find('.prevNumberButton').first().props().hidden
    expect(result).toBe(true)
  });
  test('should return second buttons with class prevNumberButton not be hidden', () => {
    const result = wrapper.find('.prevNumberButton').last().props().hidden
    expect(result).toBe(false)
  });

  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return one button with class currentNumberButton', () => {
    const result = wrapper.find('.currentNumberButton')
    expect(result).toHaveLength(1)
  });
  test('should button with class currentNumberButton have text 2', () => {
    const result = wrapper.find('.currentNumberButton').text()
    expect(result).toBe('2')
  });
  test('should button with class currentNumberButton have style font weight 600', () => {
    const result = wrapper.find('.currentNumberButton').prop('style')
    expect(result).toEqual({ "fontWeight": 600 })
  });

  test('should return two buttons with class nextNumberButton', () => {
    const result = wrapper.find('.nextNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should first button with class nextNumberButton not be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').first().prop('hidden')
    expect(result).toEqual(false)
  });

  test('should first button with class nextNumberButton have text 3', () => {
    const result = wrapper.find('.nextNumberButton').first().text()
    expect(result).toEqual('3')
  });

  test('should second button with class nextNumberButton have text 4', () => {
    const result = wrapper.find('.nextNumberButton').last().text()
    expect(result).toEqual('4')
  });

  test('should second button with class nextNumberButton be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').last().prop('hidden')
    expect(result).toEqual(true)
  });


  test('should return button with class nextArrowButton', () => {
    const result = wrapper.find('.nextArrowButton')
    expect(result).toHaveLength(1)
  });
  test('should return button with class nextArrowButton not be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props()['disabled']
    expect(result).toBe(false)
  });
  test('should return button with class nextArrowButton not be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props().disabled
    expect(result).toBe(false)
  });

});

describe('Pagination component props: lengthPages 3 numberPage 3 should return pagination component', () => {

  const pagination = <Pagination
    lengthPages={3}
    numberPage={3}
  // setNumbetPages={1}
  />

  const wrapper = shallow(pagination);

  test('should return 7 button ', () => {
    const result = wrapper.find('button')
    expect(result).toHaveLength(7)
  });
  test('should return div with paggination class ', () => {
    const result = wrapper.find('.paggination')
    expect(result).toHaveLength(1)
  });
  test('should return one button with class prevArrowButton', () => {
    const result = wrapper.find('.prevArrowButton')
    expect(result).toHaveLength(1)
  });

  test('should return button with class prevArrowButton not be disabled', () => {
    const result = wrapper.find('.prevArrowButton').props().disabled
    expect(result).toBe(false)
  });
  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return first buttons with class prevNumberButton not be hidden', () => {
    const result = wrapper.find('.prevNumberButton').first().props().hidden
    expect(result).toBe(false)
  });
  test('should return second buttons with class prevNumberButton not be hidden', () => {
    const result = wrapper.find('.prevNumberButton').last().props().hidden
    expect(result).toBe(false)
  });

  test('should return two buttons with class prevNumberButton', () => {
    const result = wrapper.find('.prevNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should return one button with class currentNumberButton', () => {
    const result = wrapper.find('.currentNumberButton')
    expect(result).toHaveLength(1)
  });
  test('should button with class currentNumberButton have text 3', () => {
    const result = wrapper.find('.currentNumberButton').text()
    expect(result).toBe('3')
  });
  test('should button with class currentNumberButton have style font weight 600', () => {
    const result = wrapper.find('.currentNumberButton').prop('style')
    expect(result).toEqual({ "fontWeight": 600 })
  });

  test('should return two buttons with class nextNumberButton', () => {
    const result = wrapper.find('.nextNumberButton')
    expect(result).toHaveLength(2)
  });

  test('should first button with class nextNumberButton be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').first().prop('hidden')
    expect(result).toEqual(true)
  });

  test('should first button with class nextNumberButton have text 4', () => {
    const result = wrapper.find('.nextNumberButton').first().text()
    expect(result).toEqual('4')
  });

  test('should second button with class nextNumberButton have text 5', () => {
    const result = wrapper.find('.nextNumberButton').last().text()
    expect(result).toEqual('5')
  });

  test('should second button with class nextNumberButton be hidden ', () => {
    const result = wrapper.find('.nextNumberButton').last().prop('hidden')
    expect(result).toEqual(true)
  });


  test('should return button with class nextArrowButton', () => {
    const result = wrapper.find('.nextArrowButton')
    expect(result).toHaveLength(1)
  });
  test('should return button with class nextArrowButton not be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props()['disabled']
    expect(result).toBe(true)
  });
  test('should return button with class nextArrowButton not be disabled', () => {
    const result = wrapper.find('.nextArrowButton').props().disabled
    expect(result).toBe(true)
  });

});