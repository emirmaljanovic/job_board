import React from 'react';
import App from './App';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('#App', () => {

  test('it renders', async () => {
    await act(async () => {
      const wrapper = mount(<App />);
  
      setImmediate(() => {
        wrapper.update();
        expect(wrapper.find('Header').exists()).toBe(true);
        expect(wrapper.find('Header a').exists()).toBe(true);
        expect(wrapper.find('Header a').get(0).props.href).toEqual('/');
        expect(wrapper.find('Header h1').text()).toEqual('Job board');
        expect(wrapper.find('Home').exists()).toBe(true);
        expect(wrapper.find('Home ListItem').length).toEqual(14);
      });
    });
  });
});
