import React from 'react';
import { addons } from 'react/addons';
import { getNode } from './utils';

const {
  isCompositeComponent,
  isDOMComponent,
  getRenderedChildOfCompositeComponent,
  findRenderedComponentWithType
  } = addons.TestUtils;

export default function react2tree(app, name = 'tree') {
  let tree = {
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
    if (isDOMComponent(c)) {
      return;
    }

    node.children.push({
      name: c.constructor.name,
      children: []
    });

    const ccc = getRenderedChildOfCompositeComponent(c);

    if (isDOMComponent(ccc)) {
      React.Children.forEach(ccc.props.children, function traverseCompositeChildrenOf(child) {
        if (child.type) {
          const cccc = findRenderedComponentWithType(ccc, child.type);
          traverse(cccc, getNode(node, c.constructor.name));
        }
      });
    } else {
      traverse(ccc, getNode(node, c.constructor.name));
    }
  }

  return tree;
}
