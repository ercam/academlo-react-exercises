import React from 'react'
import MessageArea from './MessageArea'
import MessageContainer from './MessageContainer'
import { Container } from '@material-ui/core'
// import store from './redux/store'

// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// unsubscribe();

const Exercise13 = () => {
    return (
        <Container style={{height: '100vh'}}>
            <div style={{display: 'flex', flexFlow: 'column', height: '100%'}}>
                <div style={{flex: '0 1 56px', backgroundColor: '#4080bf', }}>
                    <h1 style={{color: '#fff', margin: '0px'}}>CHAT</h1>
                </div>
                <div style={{flex: '1 1 auto', backgroundColor: '#ecf2f9'}}>
                    <MessageContainer />
                </div>
                <div style={{flex: '0 1 56px'}}>
                    <MessageArea />       
                </div>
            </div>
        </Container>
    )
}

export default Exercise13
