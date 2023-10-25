import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// first component
function Hello(props) {
  return <h2>{props.title}</h2>
}
// second component
const Hello2 = props => <h2>{props.title}</h2>

//third component
class Title extends Component {
  render() {
    return <h2>{this.props.text}</h2>
  }
}
// default props
Title.defaultProps = {
  text: 'Título por defecto'
}

class Text extends Component {
  render() {
    // props
    const {
      activated,
      arrayNumber,
      multiply,
      number,
      objectInfo,
      text,
      title
    } = this.props
    //variables
    const texto2 = activated ? 'Cierto' : 'Falso'
    const mappedNumbers = arrayNumber.map(n => n * 2)
    const mappedNumbers2 = arrayNumber.map(multiply)
    return (
      <div>
        <p>{text}</p>
        <p>{number}</p>
        <p>{arrayNumber.join(', ')}</p>
        <p>{objectInfo.key}</p>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{mappedNumbers2.join(', ')}</p>
        <p>{texto2}</p>
        <p>{title}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bienvenidos a React</h1>
        {/* <Hello title="Hello from props" />
        <Hello2 title="Hello from props 2" />
        */}
        <Title />{/*Renderiza el default prop */}
        <Title text="Hola mundo" />{/*Renderiza el prop recibido */}
        <Text
          arrayNumber={[1, 2, 3, 4, 5, 6]}
          activated
          multiply={(number) => number * 3}
          number={2}
          text="Texto"
          objectInfo={{ key: "first", key2: "second" }}
          title={<h1>Hola mundo como prop</h1>}
        />

      </header>
    </div>
  );
}

export default App;
