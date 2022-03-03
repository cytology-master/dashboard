import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom"
import Home from "./Home"
import Posts from "./Posts"
import Forums from "./Forums"
import Settings from "./Settings"

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Dashboard</h1>
                    <ul className="header">
                        <li><NavLink to="/">Main</NavLink></li>
                        <li><NavLink to="/posts">Posts</NavLink></li>
                        <li><NavLink to="/forums">Foruns</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                    </ul>

                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/posts" element={<Posts />} />
                            <Route path="/forums" element={<Forums />} />
                            <Route path="/settings" element={<Settings />} />
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}
export default Main