export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SHOW_OPTIONS = 'SHOW_OPTIONS';

export const sendMessage = () => {
    return { type: SEND_MESSAGE } 
}

export const deleteMessage = id => {
    return { type: DELETE_MESSAGE, id }
}

export const setInputValue = inputValue => {
    return { type: SET_INPUT_VALUE, inputValue }
}

export const showOptions = id => {
    return { type: SHOW_OPTIONS, id }
}