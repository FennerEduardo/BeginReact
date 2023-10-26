import React, { Component } from "react";

export default class Forms extends Component {
    handleClick = (e) => {
        e.preventDefault();
        const name = this.inputName.value
        const twitter = this.inputTwitter.value
        console.log({ name, twitter });
    }

    handleSubmit = (e) => {
        this.handleClick(e)
    }
    handleCheck = (e) => {
        console.log(e.target.checked);
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
                        placeholder="Introduce el nombre"
                        ref={inputElement => this.inputName = inputElement}
                    />
                </p>
                <p>
                    <label htmlFor="twitter">Twitter: </label>
                    <input
                        id="twitter"
                        name="twitterAccount"
                        placeholder="Introduce el Twitter"
                        ref={inputElement => this.inputTwitter = inputElement}
                    />
                </p>
                <p>
                    <label htmlFor="twitter">
                        <input
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