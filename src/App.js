import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'NicoD'
    };
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <UserInput
          usernameChange={this.usernameChangedHandler}
          username={this.state.username}
        />
        <UserOutput
          username={this.state.username}
        />
      </div>
    );
  }
}

export default App;
