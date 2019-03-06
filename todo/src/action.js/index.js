import uuid from 'uuid';
// import * as types from '../constants/actionType';


export const addTodo = value => ({
    type: 'ADD_TODO',
    payload: {
        id: uuid(),
        value,
        isCompleted: false,
    }
});

export const isCompleted = id => ({
    type: 'TODO_IS_COMPLETED',
    payload: {
        id: id,
    }
})

export const deleteTodo = () => ({
    type: 'DELETE_TODO',
})