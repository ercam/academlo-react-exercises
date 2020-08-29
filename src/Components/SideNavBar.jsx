import React from 'react'
import { Link } from "react-router-dom"
import "./styles.css"

const SideNavBar = () => {
    return ( 
        <nav className="sidebar-container">
            <Link className="sidebar-link" to="/">Home</Link>  
            <Link className="sidebar-link" to="/api-rest-crud">API REST CRUD</Link>  
            <Link className="sidebar-link" to="/pokedex">Pokedex</Link>  
            <Link className="sidebar-link" to="/shopping-cart">Shopping Cart</Link>      
            <Link className="sidebar-link" to="/chat">Chat</Link>
        </nav>

            /* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */
            // <Switch className="exercise-container">
            // <Route path="/about">
            //     <About />
            // </Route>
            // <Route path="/users">
            //     <Users />
            // </Route>
            // <Route path="/">
            //     <Home />
            // </Route>
            // </Switch>
    );
}

export default SideNavBar
