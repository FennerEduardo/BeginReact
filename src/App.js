import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    console.log('primero el constructor');
    super(props)// llamar la constructor de component class
    // inicializar el state del componente
    this.state = { mensajeInicial: 'mensaje inicial' }
    // bindear el contexto para el metodo handleClick
    //this.handleClick = this.handleClick.bind(this)
  }
  // al cambiar el metodo por un arrow function no es necesario hacer el bind del constructor
  handleClick = (e) => {
    this.setState({ mensajeInicial: 'mensaje cambiado' })
  }

  render() {
    console.log('luego el render');
    return (
      <div className="App">
        <h4>Ciclo Montaje: constructor</h4>
        {this.state.mensajeInicial}
        <button onClick={this.handleClick}>Cambiar mensaje</button>
      </div>
    );
  }
}

export default App;
