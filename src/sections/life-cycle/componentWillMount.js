import React, { Component } from "react";

export default class ComponentWillMount extends Component {
    constructor(props) {
        console.log('constructor');
        super(props)
        this.state = { mensajeInicial: 'mensaje inicial', scroll: 0 }
    }

    // deprecado
    // UNSAFE_componentWillMount() {
    //     console.log('componentWillMount');
    // }

    componentDidMount() {
        console.log('didMount');
        // al actualizar el state aquí se ejecuta de nuevo el render
        this.setState({ otro: '' })

        // aqui es un buen sitio para suscribirse a los eventos del DOM
        document.addEventListener('scroll', () => {
            console.log(window.scrollY);
            this.setState({ scroll: window.scrollY })
        })
    }

    render() {
        console.log('luego el render');
        return (
            <div className="App">
                <h4>Ciclo Montaje: ComponentWillMount</h4>
                {this.state.mensajeInicial}
                <p>{this.state.scroll}</p>
                <p>
                    ohola
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    hola mundo
                </p>
                <p>{this.state.scroll}</p>
            </div>
        );
    }
}