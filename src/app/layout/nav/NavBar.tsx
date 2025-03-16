import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import SignedOutButtons from './SignedOutButtons'
import SignedInMenu from './SignedInMenu'

export default function NavBar() {

  const [auth, setAuth] = useState(true);

  return (
    <Menu inverted={true} fixed="top">
        <Container>
            <MenuItem header as={NavLink} to='/'>
                <img src="/logo.png" alt="logo" style={{marginRight: 15}} />
                Re-vents
            </MenuItem>
            <MenuItem name="Events" as={NavLink} to='/events' />
            <MenuItem name="Scratch" as={NavLink} to='/stratch' />
            <MenuItem as={NavLink} to='createEvent'>
            <button 
              style={{ float: "right", 
                       backgroundColor: "green", 
                       color: "white", 
                       border: "none", 
                       padding: "10px 15px", 
                       cursor: "pointer" }}>
                Create Event
            </button>
            </MenuItem>
            {auth ? <SignedInMenu setAuth={setAuth} /> : <SignedOutButtons setAuth={setAuth} />}
        </Container>
    </Menu>
  )
}
