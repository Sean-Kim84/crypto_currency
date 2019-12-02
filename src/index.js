import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './app/AppLayout';

const Root = () => {
  return (
    <AppLayout id="root" />
  )
};

ReactDOM.render(<Root />, document.getElementById('root'));