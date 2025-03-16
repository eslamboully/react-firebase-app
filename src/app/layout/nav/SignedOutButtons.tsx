import { MenuItem } from "semantic-ui-react";

type Props = {
    setAuth: (value: boolean) => void;
}

export default function SignedOutButtons({setAuth}: Props) {
  return (
    <MenuItem position="right">
        <button onClick={() => setAuth(true)} style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", padding: "10px 15px", cursor: "pointer" }}>
            Login
        </button>

        <button onClick={() => setAuth(false)} style={{ backgroundColor: "transparent", color: "white", border: "1px solid white", padding: "10px 15px", cursor: "pointer", marginLeft: "0.5em" }}>
            Sign Out
        </button>
    </MenuItem>
  )
}
