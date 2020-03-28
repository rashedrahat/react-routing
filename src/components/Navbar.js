import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (<ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to="/users">Users</Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/contact'}><li>Contact</li></Link>
            <a href={'/'}>Home with browser reload</a><br/>
            <a href={'/users'}>Users with browser reload</a><br/>
            <a href={'/about'}>About with browser reload</a><br/>
            <a href={'/contact'}>Contact with browser reload</a><br/>
        </ul>);
    }
}

export default Navbar;