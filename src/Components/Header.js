import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Tab, Menu, Icon} from 'semantic-ui-react'

export default function Header(props) {

    return(
        <>
            <Menu>
                <Menu.Item as ={Link} to="/home">Home</Menu.Item>
            </Menu>
        </>
    )
}



