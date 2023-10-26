import './App.css';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Box extends Component {
  render() {
    return <div style={{ border: '1px solid #000', margin: 5, padding: 5 }}>
      {this.props.children}
    </div>
  }
}

class Article extends Component {
  //Using prop types
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  render() {
    const { author, children, date, title } = this.props
    return (
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por:</em> {author}</p>}
        <Box>{date}</Box>
        <article>{children}</article>
      </section>
    )
  }
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <h4>Children props</h4>
        <Article
         
          date={new Date().toLocaleDateString()}
          title='Artículo sobre app children'
        >
          <p>
            El contenido que envolvemos dentro del componente Article será enviado a las this.props.children, <strong>Y mantiene las estiquetas o tags (rjx) HTMl  que se usen sin problemas de renderización o necesidad de escaparlas</strong>
          </p>
        </Article>
        <Article
          author='Fenner'
          date={new Date().toLocaleDateString()}
          title='Artículo sobre app children 2'
        >
          <p>
            El contenido que envolvemos dentro del componente Article será enviado a las this.props.children, <strong>Y mantiene las estiquetas o tags (rjx) HTMl  que se usen sin problemas de renderización o necesidad de escaparlas</strong>
          </p>
        </Article>
        <Article

          date={new Date().toLocaleDateString()}
          title='Artículo sobre app children 3'
        >
          <p>
            El contenido que envolvemos dentro del componente Article será enviado a las this.props.children, <strong>Y mantiene las estiquetas o tags (rjx) HTMl  que se usen sin problemas de renderización o necesidad de escaparlas</strong>
          </p>
        </Article>
      </div>
    );
  }
}

export default App;
