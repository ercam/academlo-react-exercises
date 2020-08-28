import { 
    SEND_MESSAGE,
    DELETE_MESSAGE,
    SET_INPUT_VALUE,
    SHOW_OPTIONS
} from './chatActions'
import moment from 'moment'

moment.locale();


const initialState = {
    messages: [],
    inputMessage: "",
    bot: ["Hello", "I'm a bot", "How are you doing?"]
}
// Si no funciona separarlo en dos reducers con estados distintos y juntarlos con combineReducer en el store.js
const chatApp = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE: 
            let newMessage = [...state.messages, {content: state.inputMessage, date: moment(), showOptions: false}]
            return { ...state, messages: newMessage, inputMessage: "" }
        case DELETE_MESSAGE:
            let newArrayD = state.messages.filter((message, id) => id !== action.id);
            return { ...state, messages: newArrayD }
        case SET_INPUT_VALUE:
            return { ...state, inputMessage: action.inputValue}
        case SHOW_OPTIONS:
            let newArrayO = state.messages.map((message, id) => id === action.id ? {...message, showOptions: !message.showOptions} : message);
            return { ...state, messages: newArrayO }
        default:
            return state
    }
}

export default chatApp