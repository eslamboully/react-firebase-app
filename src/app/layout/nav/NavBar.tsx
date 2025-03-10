import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'
import SignedOutButtons from './SignedOutButtons'

export default function NavBar() {
  return (
    <Menu inverted={true} fixed="top">
        <Container>
            <MenuItem header as={NavLink} to='/'>
                <img src="/logo.png" alt="logo" style={{marginRight: 15}} />
                Re-vents
            </MenuItem>
            <MenuItem name="Events" as={NavLink} to='/events' />
            <MenuItem as={NavLink} to='createEvent'>
            <button 
              style={{ float: "right", backgroundColor: "green", color: "white", border: "none", padding: "10px 15px", cursor: "pointer" }}>
                Create Event
            </button>
            </MenuItem>
            <SignedOutButtons />
        </Container>
    </Menu>
  )
}
