import React from 'react';
import { render } from 'react-dom';
import react2tree from 'react2tree';
import pretty from 'json-pretty';
import App from './components/App';

const root = render(<App/>, document.createElement('div'));

let json = pretty(react2tree(root));
json = json.replace(/\n/g, '<br>');
json = json.replace(/\s{2}/g, '&nbsp;&nbsp;');

document.getElementById('root').innerHTML = json;
