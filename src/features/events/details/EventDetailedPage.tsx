import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useAppSelector } from "../../../app/store/store";
import { useParams } from "react-router-dom";

export default function EventDetailedPage() {

  const {id} = useParams<{id: string}>();
  const event = useAppSelector(state => state.events.events.find(e => e.id === id));

  if (!event) return <h1>Event not found </h1>

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar />
      </Grid.Column>
    </Grid>
  )
}
