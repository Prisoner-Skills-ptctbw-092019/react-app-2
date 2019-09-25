import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Tab, Menu, Icon} from 'semantic-ui-react'

export default function Header(props) {

    return(
        <div className="header-bar">
            <h1>Prisoner Skills</h1>
            <Menu>
                <Menu.Item as ={Link} to="/home">Home</Menu.Item>
                <Menu.Item as ={Link} to="/home">Prisoners</Menu.Item>
                <Menu.Item as ={Link} to="/home">Admin</Menu.Item>
            </Menu>
        </div>
    )
}



