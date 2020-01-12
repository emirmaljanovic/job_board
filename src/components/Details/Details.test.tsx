import React from 'react';
import Details from './index';
import { mount } from 'enzyme';
import { Route } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';

describe('#Details', () => {

  test('it renders', async () => {
    await act(async () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/details/1']}>
          <Route path='/details/:id' component={Details} />
        </MemoryRouter>
      );
  
      setImmediate(() => {
        wrapper.update();

        expect(wrapper.find('Details').exists()).toBe(true);
        expect(wrapper.find('Details h1').text()).toEqual('Frontend Developer');
        expect(wrapper.find('Details p').text()).toEqual('Comfortable with modern JS stack, experience with React.');
      });
    });
  });
});
