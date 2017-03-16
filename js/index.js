require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Gallery from './components/gallery';

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(<Gallery />, document.getElementById('app'))
);