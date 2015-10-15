import React, { Component } from 'react';

class Box1 extends Component {
  render() {
    return <span>box1</span>;
  }
}
class Box2 extends Component {
  render() {
    return <span>box2</span>;
  }
}
class Parent extends Component {
  render() {
    return (
      <div>
        <Box1/>
        <Box2/>
      </div>
    );
  }
}
class App extends Component {
  render() {
    return <Parent/>;
  }
}

export default App;
