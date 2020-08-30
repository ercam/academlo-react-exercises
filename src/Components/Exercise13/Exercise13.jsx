import React from 'react'
import MessageArea from './MessageArea'
import MessageContainer from './MessageContainer'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: '90vh',
        width:'90%', 
        margin: '5vh auto',
        padding: '0',
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.2)'
    },
    headerContainer: {
        flex: '0 1 56px', 
        backgroundColor: '#404040'
    },
    header: {
        color: '#fff', 
        margin: '0px'
    },
    messageContainer: {
        flex: '1 1 auto', 
        backgroundColor: '#ecf2f9'
    },
    messageArea: {
        flex: '0 1 56px'
    }
}))

const Exercise13 = () => {
    const classes = useStyles();
    return (
        <Container className={classes.mainContainer}>
                <div className={classes.headerContainer}>
                    <Typography variant="h3" component="h1" className={classes.header}>
                        CHAT
                    </Typography>
                </div>
                <div className={classes.messageContainer}>
                    <MessageContainer />
                </div>
                <div className={classes.messageArea}>
                    <MessageArea />       
                </div>
        </Container>
    )
}

export default Exercise13
