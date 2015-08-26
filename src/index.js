import React from 'react';
import { addons } from 'react/addons';
import { getNode } from './utils';

const {
  isCompositeComponent,
  isDOMComponent,
  getRenderedChildOfCompositeComponent,
  findRenderedComponentWithType
  }  = addons.TestUtils;

export default function react2tree(app, name = 'tree') {
  var tree = {
    name,
    children: []
  };

  if (!isCompositeComponent(app)) {
    return tree;
  }

  traverse(app, tree);

  function traverse(c, node) {
    if (isDOMComponent(c)) {
      return;
    }

    node.children.push({
      name: c.constructor.name,
      children: []
    });

    var ccc = getRenderedChildOfCompositeComponent(c);

    if (isDOMComponent(ccc)) {
      React.Children.map(ccc.props.children, function(child, key, index) {
        if (child.type) {
          var cccc = findRenderedComponentWithType(ccc, child.type);
          traverse(cccc, getNode(node, c.constructor.name));
        }
      })
    } else {
      traverse(ccc, getNode(node, c.constructor.name));
    }
  }

  return tree;
}
