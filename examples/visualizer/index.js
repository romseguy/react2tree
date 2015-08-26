import React from 'react';
import App from './components/App';
import react2tree from 'react2tree';

const root = React.render(<App/>, document.getElementById('root'));

console.log(react2tree(root));
