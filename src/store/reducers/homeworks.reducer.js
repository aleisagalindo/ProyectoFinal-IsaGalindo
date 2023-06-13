import { ADD_HOMEWORK } from "../actions/homeworks.actions";
import Homework from '../../models/Homework'

const initialState = {
    homeworks: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_HOMEWORK:
            const newHomework = new Homework(Date.now(), action.payload.title, action.payload.image);
            return {...state, homeworks: state.homeworks.concat(newHomework) };
        default: 
            return state;
        }
}