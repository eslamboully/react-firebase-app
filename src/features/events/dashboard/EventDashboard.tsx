import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../forms/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { AppEvent } from "../../../app/types/event";
import { useEffect, useState } from "react";

export default function EventDashboard() {

  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  return (
    <Grid>
        <Grid.Column width={10}>
            <EventList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
            <h2>Filters</h2>
        </Grid.Column>
    </Grid>
  )
}
