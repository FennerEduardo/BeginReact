import './App.css';
import React, { Component } from 'react';

class Contador extends Component {
  // Agregando el state desde el constructor
  constructor(props) {
    super(props)
    this.state = { contador: this.props.contadorInicial }
    // modificar el state usando el metodo setState
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }
  // agregando el state fuera del constructor
  // state = { contador: 1 }
  render() {
    // usando el state
    return <ContadorNumero numero={this.state.contador} />
  }
}
// agregando un default prop
Contador.defaultProps = {
  contadorInicial: 0
}

class ContadorNumero extends Component {
  render() {
    return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador contadorInicial={100} />
      </div>
    );
  }
}

export default App;
