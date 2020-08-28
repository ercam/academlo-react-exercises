import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemText, Icon, Select, MenuItem } from '@material-ui/core'
import store from '../../redux/store'
import { showOptions, deleteMessage } from '../../redux/chatActions'

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '4px',
        paddingBottom: '4px',
        '& .MuiListItemText-root': {
            flex: '0 0 auto',
        },
        '& .MuiInputBase-root': {
            visibility: 'hidden'
        }
    },
    listItemText: {
        display: 'flex',
        backgroundColor: '#fff',
        // border: '1px solid #000',
        padding: '8px 8px 8px 16px',
        borderRadius: '8px'
    },
    icon: {
        // marginLeft: theme.spacing(1),
        '&:hover': {
            cursor: 'pointer'
        }
    }
}))

const MessageItem = ({message, id}) => {
    const classes = useStyles();

    const handleToggle = () => {
        store.dispatch(showOptions(id))
    }

    const handleDelete = () => {
        store.dispatch(deleteMessage(id))
    }

    return (
        <ListItem 
            component="span"
            className={classes.root}
        >
            <div className={classes.listItemText}>
                <ListItemText  
                    primary={message.content} 
                    secondary={message.date.format('LT')}
                />
                <Select
                    open={message.showOptions}
                    onClose={handleToggle}
                    onOpen={handleToggle}    
                >
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                </Select>
                <Icon 
                    className={classes.icon}
                    onClick={handleToggle}
                >expand_more</Icon>
            </div>
            
        </ListItem>
    )
}

export default MessageItem
