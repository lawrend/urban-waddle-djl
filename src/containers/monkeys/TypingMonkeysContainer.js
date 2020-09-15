import React, {Component} from 'react';
import MonkeyInputForm from '../../components/monkeys/MonkeyInputForm.js';
import MonkeyResults from '../../components/monkeys/MonkeyResults.js';
import {Link} from 'react-router-dom';
import '../../css/typing-monkeys.css';

class TypingMonkeysContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monkeysToType: "",
      monkeysTyping: true,
      monkeyProgress: "",
    }
  }

  stopMonkeys = () => {
    this.setState({monkeysTyping: false})
    console.log(this.state)
  }

  monkeyType = (str) => {

    let newStr = "";
    while(this.state.monkeysTyping === true && newStr.length < str.length) {
      let newChar = Math.random().toString(36).substr(2,1);
      if(newChar === str[newStr.length]) {
        newStr += newChar;
        this.setState({monkeyProgress: newStr})
      }
    }
  }

  handleChange = (e) => {
    this.setState({monkeysToType: e.target.value.toLowerCase()})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.setState({monkeysTyping: true})
    this.monkeyType(this.state.monkeysToType)
  }


  render() {
    return (
      <div className="typing-monkeys-container">
        <div>
        <MonkeyInputForm monkeysToType={this.state.monkeysToType} onSubmit={this.handleSubmit} handleChange={this.handleChange} />
      </div>
      <div>
        <MonkeyResults toType={this.state.monkeysToType.toLowerCase().split(', ')} results={this.state.monkeyProgress}/>
      </div>

        <div className="monkey-stop-container">
          <button id="monkey-stop-button" onClick={this.stopMonkeys}>Stop Monkeys</button>
    </div>
        <div>
        <Link to="/" className="home-link">home</Link>
</div>
      </div>
      )
  }
}

export default TypingMonkeysContainer;

