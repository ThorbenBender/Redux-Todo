
// import * as types from '../constants/actionType';
import uuid from 'uuid';

const initialState = [
    {
        id: uuid(),
        value: 'wash the dog',
        completed: false,
    },
    {
        id: uuid(),
        value: 'read a book',
        completed: false,
    },
    {
        id: uuid(),
        value: 'clean the car',
        completed: false,
    },
];

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
        return state.concat(action.payload);
        case 'TODO_IS_COMPLETED':
        return state.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed } : todo)
        case 'DELETE_TODO':
        return state.filter(todo => todo.completed !== true);
        default:
        return state;
    }
}