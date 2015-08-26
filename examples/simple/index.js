import React from 'react';
import App from './components/App';
import react2tree from 'react2tree';
import pretty from 'json-pretty';

const root = React.render(<App/>, document.createElement('div'));

let json = pretty(react2tree(root));
json = json.replace(/\n/g, '<br>');
json = json.replace(/  /g, '&nbsp;&nbsp;');

document.getElementById('root').innerHTML = json;
