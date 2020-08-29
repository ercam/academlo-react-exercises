import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Exercise8To10 from './Exercise8To10/Exercise8To10'
import Exercise11 from './Exercise11/Exercise11'
import Exercise14 from './Exercise14/Exercise14'
import Exercise13 from './Exercise13/Exercise13'

const Main = () => {
    return (
        <main className="main-container">
            <Switch>
                <Route path="/api-rest-crud">
                    <Exercise8To10 />
                </Route>
                <Route path="/pokedex">
                    <Exercise11 />
                </Route>
                <Route path="/shopping-cart">
                    <Exercise14 />
                </Route>
                <Route path="/chat">
                    <Exercise13 />
                </Route>
                <Route path="/">
                    <h1>Hello World!</h1>
                </Route>
            </Switch>
        </main>
    )
}

export default Main
