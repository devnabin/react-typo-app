import React from "react";
import "./App.css";
import Validation from "./Components/ValidationComponent/ValidationComponent";
import Char from "./Components/Char/char";

class App extends React.Component {
  state = {
    userInput: "",
  };

  inputChangeHandler = (e) => {
    this.setState({ userInput: e.target.value });
  };

  deleteHandler = (index) => {
    const string = this.state.userInput.split("");
    string.splice(index, 1);
    const updateString = string.join("");
    this.setState({ userInput: updateString });
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          click={() => this.deleteHandler(index)}
        />
      );
    });

    return (
      <div className="Header">
        <input
          type="text"
          onChange={this.inputChangeHandler}
          placeholder="Enter Your Text"
          value={this.state.userInput}
        />

        <p className="keyFont">{this.state.userInput}</p>

        <Validation textLength={this.state.userInput.length} />

        {charList}
      </div>
    );
  }
}

export default App;
