import React from 'react';
import axios from 'axios';

import TodoList from './TodoList.js'

class  App extends React.Component {
  state = {
    todos:[] // an empty array inside our state
  }
  
  loadTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => {
        this.setState({
          todos:response.data
        })
      })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.loadTodos}>Load</button>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
