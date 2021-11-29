import { combineReducers } from "redux";
import actions, { Actions } from "../actions";
import { reducer as FormReducer } from "redux-form";
const initialState = {
    streams: [
   
  ]
}
export const streamReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case Actions.SET_STREAMS:
            return {...state, streams: payload};
        default:
            return state;
    }
}
export const selectedStreamReducer = (state = {}, {type, payload}) => {
    switch(type){
        case Actions.SELECTED_STREAM:
            return {...state, ...payload}
        default:
            return state;
    }
}

export const removeStreamReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case Actions.DELETE_STREAM:
            return {
                ...state,
                streams: state.streams
            }
        default:
            return state;
    }
}


export const streamCreateReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case Actions.CREATE_STREAM:
            return {...state, streams: payload};
        default:
            return state;
    }
}

export const streamEditReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case Actions.EDIT_STREAM:
            return {...state, streams: payload};
        default:
            return state;
    }
}

export default combineReducers({
    streams: streamReducer,
    stream: selectedStreamReducer,
    newStream: streamCreateReducer,
    removedStreams: removeStreamReducer,
    form:FormReducer
})
