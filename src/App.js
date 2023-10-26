import './App.css';
import React, { Component } from 'react';

class Box extends Component {
  render() {
    return <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
      {this.props.children}
    </div>
  }
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Box>Hola! soy un children  </Box>
        <Box>Hola! soy un children 2  </Box>
      </div>
    );
  }
}

export default App;
