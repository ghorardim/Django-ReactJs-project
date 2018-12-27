import React, { Component } from 'react';
import axios from 'axios'

const MESSAGE_API = "http://127.0.0.1:8000/api/?format=json"

class App extends Component {

  state = {
    message: []
}

  componentDidMount(){
    this.getMessage()
}

  getMessage(){

    axios.get(MESSAGE_API)
    .then(res => {
      this.setState({message: res.data})
    })
    .catch(err => {
      console.log(err)
})

}

  render() {
    return (
      <div>
        {this.state.message.map(item => (
          <div>
            <h2>{item.text}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
