import { ChangeEvent, useState } from "react";
import { Form, Header, Segment } from "semantic-ui-react";

export default function EventForm() {

  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: ''
  }

  const [values, setValues] = useState(initialValues);

  function onSubmit() {
    // selectedEvent ? updateEvent({...selectedEvent, ...values}) :
    // addEvent({...values, id: createId(), hostedBy: 'Bob', hostPhotoURL: '/user.png', attendees: []});
    // setFormOpen(false);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  return (
    <Segment clearing>
        <Header content={'Create Event'} />
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <input type='text' 
                       placeholder='Event Title' 
                       value={values.title} 
                       name='title'
                       onChange={e => handleInputChange(e)} />
            </Form.Field>
            <Form.Field>
                <input type='text' 
                       placeholder='Category' 
                       value={values.category} 
                       name='category'
                       onChange={e => handleInputChange(e)} />
            </Form.Field>
            <Form.Field>
                <input type='text' 
                       placeholder='Description' 
                       value={values.description} 
                       name='description'
                       onChange={e => handleInputChange(e)} />
            </Form.Field>
            <Form.Field>
                <input type='text' 
                       placeholder='City' 
                       value={values.city} 
                       name='city'
                       onChange={e => handleInputChange(e)} />
            </Form.Field>
            <Form.Field>
                <input type='text' 
                       placeholder='Venue' 
                       value={values.venue} 
                       name='venue'
                       onChange={e => handleInputChange(e)} />
            </Form.Field>
            <Form.Field>
                <input type='date' 
                       placeholder='Date' 
                       value={values.date} 
                       name='date'
                       onChange={e => handleInputChange(e)} />
            </Form.Field>

            <button type='submit' className='ui green basic button' onClick={() => onSubmit()}>Submit</button>
            <button type='button' className='ui button'>Cancel</button>
        </Form>
    </Segment>
  )
}
