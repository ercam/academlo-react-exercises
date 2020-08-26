import React from 'react'
import MessageItem from './MessageItem'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core'
import store from './redux/store'

const useStyles = makeStyles(theme => ({
    list: {
        margin: '0 auto',
        overflow: 'auto',
    }
}))

const MessageContainer = () => {
    const classes = useStyles();
    const messages = store.getState().messages;
    return (
        <List className={classes.list}>
            {messages.map((message, id) => 
            <MessageItem message={message} id={id} key={id}/>
            )}
        </List>
    )
}

export default MessageContainer
