import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, IconButton, Icon } from '@material-ui/core'
import store from '../../redux/store'
import { setInputValue, sendMessage } from '../../redux/chatActions'

const useStyles = makeStyles(theme => ({
    form: {
        margin: '0 auto',
        backgroundColor: '#404040'
    },
    textarea: {
        margin: theme.spacing(1),
        width: '85%',
        backgroundColor: '#fff',
        borderRadius: '20px',
        '& fieldset': {
            borderRadius: '20px'
        }
    },
    button: {
        margin: theme.spacing(1.5),
        '&:hover': {
            backgroundColor: '#404040'
        }
    },
    icon: {
        color: '#fff'
    }
}))

const MessageArea = () => {
    const classes = useStyles();
    const value = store.getState().chatApp.inputMessage;

    const handleChange = event => {
        store.dispatch(setInputValue(event.target.value));
    }

    const handleSubmit = event => {
        event.preventDefault();
        store.dispatch(sendMessage());
        console.log(store.getState());
    }

    const handleEnterSubmit = event => {
        if(event.key === 'Enter'){
            event.preventDefault();
            if(value){
                store.dispatch(sendMessage());
            }
        } 
    }

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off" className={classes.form}>
            <TextField 
                multiline
                variant="outlined"
                size='small'
                placeholder="Write your message..."
                className={classes.textarea}
                value={value}
                onChange={handleChange}
                onKeyDown={handleEnterSubmit}
            />
            <IconButton 
                aria-label="send"
                type='submit' 
                size="small"
                disableRipple={true}
                className={classes.button} 
                disabled={!value ? true : false}
            >
                <Icon className={classes.icon}>send</Icon>
            </IconButton>
        </form>
    )
}

export default MessageArea
