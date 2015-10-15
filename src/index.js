import React from 'react';
import {
  isCompositeComponent,
  isDOMComponent,
  getRenderedChildOfCompositeComponent
} from 'react-addons-test-utils';
import { getNode } from './utils';

export default function react2tree(app, name = 'tree') {
  const tree = {
    name,
    children: []
  };

  if (!isCompositeComponent(app)) {
    return tree;
  }

  /*eslint-disable*/
  traverse(app, tree);
  /*eslint-enable*/

  function traverse(c, node) {
    if (!c || isDOMComponent(c)) {
      return;
    }

    const newNodeName = typeof c === 'function' ? c.name : c.constructor.name;

    node.children.push({
      name: newNodeName,
      children: []
    });

    const ccc = getRenderedChildOfCompositeComponent(c);

    if (isDOMComponent(ccc)) {
      React.Children.forEach(ccc.props.children, function traverseChildWithNode(child) {
        if (child.type) {
          traverse(child.type, getNode(node, newNodeName));
        }
      });
    } else {
      traverse(ccc, getNode(node, c.constructor.name));
    }
  }

  return tree;
}
