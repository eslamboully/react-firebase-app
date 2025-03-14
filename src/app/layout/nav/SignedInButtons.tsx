import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedInButtons() {
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src='/user.png' />
        <Dropdown pointing='top left' text='Bob'>
            <Dropdown.Menu>
            <Dropdown.Item text='Create Event' icon='plus' />
            <Dropdown.Item text='My Profile' icon='user' />
            <Dropdown.Item text='Sign Out' icon='power' />
            </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
  )
}
