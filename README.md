react2tree
=========================

Transform React component hierarchies to plain JavaScript tree structures.

# Getting started

`npm install react2tree`

# Usage

```javascript
import React from 'react';
import react2tree from 'react2tree';

const myApp = React.render(<App/>, document.createElement('root'));
const tree = react2tree(myApp, 'myAppTree');

console.log(tree);
/*

{
  name: "myAppTree",
  children: [{
    name: "RootComponentName",
    children: [{
      name: "Parent",
      children: [{
        name: "Child",
        children: []
      }, {
        name: "OtherChild",
        children: []
      }]
    }]
  }]
}

*/

```
