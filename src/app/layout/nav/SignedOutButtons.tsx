import { MenuItem } from "semantic-ui-react";

export default function SignedOutButtons() {
  return (
    <MenuItem position="right">
        <button style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", padding: "10px 15px", cursor: "pointer" }}>
            Login
        </button>

        <button style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", padding: "10px 15px", cursor: "pointer", marginLeft: "0.5em" }}>
            Sign Out
        </button>
    </MenuItem>
  )
}
