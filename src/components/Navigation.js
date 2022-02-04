import React from "react";

import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/stores">Locate</Link></li>
                <li><Link to="/jokes">Jokes</Link></li>
            </ul>
        </div>
    )
}


export default Navigation;