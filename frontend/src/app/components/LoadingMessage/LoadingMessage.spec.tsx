import { LoadingMessage } from 'app/components/LoadingMessage';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('<LoadingMessage>', () => {
  describe('Props', () => {
    describe('message', () => {
      it('Should render the props message', () => {
        const message = 'Hello!';
        const wrapper = shallow(<LoadingMessage message={message} />);
        expect(wrapper.contains(<span>{message}</span>)).toBeTruthy(); 
      });
    });
  });
});
