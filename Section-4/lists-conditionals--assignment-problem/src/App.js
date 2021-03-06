import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: '',
    textLength: 0
  }

  calculateLength = (event) => {
    const text = event.target.value;
    const length = event.target.value.length;    

    this.setState({
      text: text,
      textLength: length
    });
  }

  removeLetterHandler = (index) => {
    let text = [...this.state.text];
    
    text.splice(index, 1);
    const updatedText = text.join('');
    
    this.setState({
      text: updatedText,
      textLength: text.length
    });
  }

  render() {
    let charComponents = null;
    charComponents = (
        <div>
          {
            [...this.state.text].map((letter, index) => {
              return <CharComponent 
                        letter={letter}
                        clickHandler={() => this.removeLetterHandler(index)}/>
            })
          }          
        </div>
    );

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <hr/>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <p>Your text: <input 
                        onChange={this.calculateLength} 
                        type="text" 
                        value={this.state.text}/></p>
        
        <ValidationComponent textLength={this.state.textLength}/>

        {charComponents}

      </div>
    );
  }
}

export default App;
