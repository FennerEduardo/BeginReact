import React, { Component } from "react";

class ComponenteA extends Component {
    render() {
        return <p>Componente A</p>
    }
}

class ComponenteB extends Component {
    render() {
        return <p>Componente B</p>
    }
}


export default class ConditionalSection extends Component {

    constructor() {
        super()
        this.state = { mostrarA: true }
    }

    useConditionalRendering = (mostrarA) => {
        if (mostrarA) {
            return <ComponenteA />;
        }
        return <ComponenteB />;
    };

    render() {
        const conditionalRender = this.state.mostrarA
            ? <ComponenteA />
            : <ComponenteB />
        return (
            <div>
                <h4>Conditional Rendering</h4>
                {/**mostrando condicionalmente con el metodo */}
                {this.useConditionalRendering(this.state.mostrarA)}
                {/**mostrando condicionalmente con una variable */}
                {conditionalRender}
                {/**Usando directamente el state para renderizar */}
                {!this.state.mostrarA
                    ? <ComponenteA />
                    : <ComponenteB />}
            </div>
        )
    }
}