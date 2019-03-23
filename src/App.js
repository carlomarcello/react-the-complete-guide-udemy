import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {    	
      valor: 1
    }
  }

  incrementaContador() {
    const novoValor = this.state.valor + 1;

    this.setState({
      valor: novoValor
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button onClick={this.incrementaContador.bind(this)}>Incrementa contador</button>        
        <p>Contador: {this.state.valor}</p>

        <Person name="Carlo" />
        <Person name="Sara" />
      </div>
    );
  }
}

export default App;
