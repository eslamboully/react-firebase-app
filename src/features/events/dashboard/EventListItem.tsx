import { Icon, Item, ItemGroup, List, Segment, SegmentGroup } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { AppEvent } from '../../../app/types/event'

type Props = {
    event: AppEvent;
}

export default function EventListItem({event}: Props) {
  return (
    <SegmentGroup>
        <Segment>
            <ItemGroup>
                <Item>
                    <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                    <Item.Content>
                        <Item.Header content={event.title} />
                        <Item.Description>
                            Hosted by {event.hostedBy}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </ItemGroup>
        </Segment>
        <Segment>
            <span>
                <Icon name='clock' /> {event.date}
                <Icon name='marker' /> {event.venue}
            </span>
        </Segment>
        <Segment secondary>
            <List horizontal>
                {event.attendees.map((attendee: any) => (
                    <EventListAttendee key={attendee.id} attendee={attendee} />
                ))}
            </List>
        </Segment>
        <Segment clearing>
            <span>Description of the event</span>
            <button style={{ float: 'right' }} className='ui red basic button'>Delete</button>
            <button style={{ float: 'right' }} className='ui teal basic button'>View</button>
        </Segment>
    </SegmentGroup>
  )
}
