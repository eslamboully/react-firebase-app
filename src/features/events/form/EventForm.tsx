import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { createId } from "@paralleldrive/cuid2";
import { createEvent, updateEvent } from "../eventSlice";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";

export default function EventForm() {
  const {register, handleSubmit, control, setValue, formState: {errors, isValid, isSubmitting}} = useForm({
    mode: 'onTouched'
  });
  
  let {id} = useParams<{id: string}>();
  const event = useAppSelector(state => state.events.events.find(e => e.id === id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onSubmit(data: FieldValues) {
    id = id ?? createId();
    event 
        ? dispatch(updateEvent({...event, ...data})) 
        : dispatch(createEvent({...data, id: createId(), attendees: [], hostedBy: 'Bob', hostPhotoURL: '/user.png'}))
    
    navigate(`/events/${id}`);
  }

  return (
    <Segment clearing>
        <Header content={event ? 'Update Event' : 'Create Event'} />
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input 
              placeholder='Event Title' 
              defaultValue={event?.title || ''}
              {...register('title', {required: true})}
              error={errors.title && 'Title is Required' } />
            
            <Controller 
              name='category'
              control={control}
              rules={{required: 'Category is required'}}
              defaultValue={event?.category}
              render={({field}) => (
                <Form.Select
                options={categoryOptions}
                placeholder='Event Category' 
                clearable
                {...field}
                onChange={(_, d) => setValue('category', d.value, {shouldValidate: true})}
                error={errors.category && errors.category.message} />
              )}
            />

            <Form.Input 
              placeholder='Event Description' 
              defaultValue={event?.description || ''}
              {...register('description', {required: true})}
              error={errors.description && 'Description is Required' } />

            <Form.Input 
              placeholder='Event City' 
              defaultValue={event?.city || ''}
              {...register('city', {required: true})}
              error={errors.city && 'City is Required' } />

            <Form.Input 
              placeholder='Event Venue' 
              defaultValue={event?.venue || ''}
              {...register('venue', {required: true})}
              error={errors.venue && 'Venue is Required' } />
            
            <Form.Input 
              type="date"
              placeholder='Event Date' 
              defaultValue={event?.date || ''}
              {...register('date', {required: true})}
              error={errors.date && 'Date is Required' } />

            <Button loading={isSubmitting} disabled={!isValid} type='submit' floated="right" positive content='Submit' color='green' />
            <Button disabled={isSubmitting} as={Link} to='/events' type='button' color='red' floated='right' content='Cancel' />
        </Form>
    </Segment>
  )
}

