import { Menu, Image, Dropdown } from "semantic-ui-react";

export default function SignedInButtons() {
  return (
    <Menu.Item position='right'>
        <Image avatar spaced='right' src='/user.png' />
        <Dropdown></Dropdown>
    </Menu.Item>
  )
}
