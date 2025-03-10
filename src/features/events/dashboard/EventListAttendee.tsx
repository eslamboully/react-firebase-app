import { List, Image, Item } from "semantic-ui-react";
import { Attendee } from "../../../app/types/event";

type Props = {
  attendee: Attendee;
}

export default function EventListAttendee({attendee}: Props) {
  return (
    <List.Item>
      <Item.Image size='mini' circular src={attendee.photoURL} />
    </List.Item>
  )
}
