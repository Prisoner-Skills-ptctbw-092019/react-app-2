import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Header(props) {

    return(
        <div className="header-bar">
            <h1>Prisoner Skills</h1>
            <Menu>
                <Menu.Item as ={Link} to="/">Home</Menu.Item>
                <Menu.Item as ={Link} to="/prisons">Prisons</Menu.Item>
                <Menu.Item as ={Link} to="/prisoners">Prisoners</Menu.Item>
                <Menu.Item as ={Link} to="/admin">Admin</Menu.Item>
            </Menu>
        </div>
    )
}



