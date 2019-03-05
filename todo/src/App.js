import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, isCompleted, deleteTodo } from './action.js/index';

class Todo extends Component {
  render() {
    return (
      <div className="App">
        {
          this.props.todo.map(item => (
            <div>
              <p>
                {item.value}
              </p>
            </div>
          ))
        }
        <div>
          <input type="text" onChange={} placeholder="What do you need to do"></input>
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
