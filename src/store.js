import {createStore} from 'redux';

const reducer = (state={
    tag : null
}, action) => {
   switch (action.type) {
       case "GET_HTML_BY_TAG_SUCCESS":
           return {...state, tag : action.payload};
       default:
           return state;
   }
};



export default createStore(reducer);