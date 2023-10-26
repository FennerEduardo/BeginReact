import React, { Component } from "react";

export default class Forms extends Component {
    constructor() {
        super()
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    handleSubmit = (e) => {
        this.handleClick(e)
    }
    handleCheck = (e) => {
        this.setState({ inputTerms: e.target.checked })
    }
    render() {
        return <div>
            <h4>Formularios</h4>
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="name">Nombre: </label>
                    <input
                        id="name"
                        name="userName"
                        onChange={e => this.setState({ inputName: e.target.value })}
                        placeholder="Introduce el nombre"
                        ref={inputElement => this.inputName = inputElement}
                        value={this.state.inputName}
                    />
                </p>
                <p>
                    <label htmlFor="twitter">Twitter: </label>
                    <input
                        id="twitter"
                        name="twitterAccount"
                        onChange={e => this.setState({ inputTwitter: e.target.value })}
                        placeholder="Introduce el Twitter"
                        ref={inputElement => this.inputTwitter = inputElement}
                        value={this.state.inputTwitter}
                    />
                </p>
                <p>
                    <label htmlFor="twitter">
                        <input
                            checked={this.state.inputTerms}
                            onChange={this.handleCheck}
                            type="checkbox"
                        />
                        Accept terms
                    </label>
                </p>
                <button onClick={this.handleClick}>Enviar</button>
            </form>
        </div>
    }
}