import React from 'react';
import ReactDOM from 'react-dom';
import Page404 from './Page404';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
