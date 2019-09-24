import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Header(props) {

    return(
        <>
            <Menu>
                <Menu.Item as ={Link} to="/">Home</Menu.Item>
                <Menu.Item as ={Link} to="/prisoners">Prisoners</Menu.Item>
                <Menu.Item as ={Link} to="/prisons">Prisons</Menu.Item>
            </Menu>
        </>
    )
}



