import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, isCompleted, deleteTodo } from './action.js/index';

class Todo extends Component {
  state = {
    inputValue: '',
  }
  onChangeHandler = event => {
    this.setState({
      inputValue: event.target.value,
    })
  }
  render() {
    return (
      <div className="App">
        {
          this.props.todo.map(item => (
            <div onClick={() => this.props.isCompleted(item.id)}>
              <p>
                {item.value}
              </p>
            </div>
          ))
        }
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.onChangeHandler} placeholder="What do you need to do"></input>
          <button type="submit" onClick={() => this.props.addTodo(this.state.inputValue)}>Add Todo</button>
          <button type="submit" onClick={this.props.deleteTodo}>Delete Todo</button>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addTodo,
    isCompleted,
    deleteTodo,
  }, dispatch);
} 

function mapStateToProps(state) {
  return {
    todo: state,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
