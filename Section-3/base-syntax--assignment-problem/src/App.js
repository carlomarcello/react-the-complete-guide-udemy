import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  state = {
    username: 'Ludwig'
  }

  changeUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }
  
  render() {
    return (
      <div className="App">        
        <br/>
        <UserInput changeHandler={this.changeUsernameHandler.bind(this)} username={this.state.username}/>
        <br/>
        <UserOutput username={this.state.username} />
        <br/>
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
