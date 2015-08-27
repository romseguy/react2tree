import React from 'react';
import d3 from 'd3';
import App from './components/App';
import react2tree from 'react2tree';
import { tree } from 'd3-state-visualizer';

const hierarchy = React.render(<App/>, document.createElement('div'));

const initialize = tree();

const render = initialize(d3, document.getElementById('root'), {
  tree: react2tree(hierarchy),
  heightBetweenNodesCoeff: 1.5
});

render();
