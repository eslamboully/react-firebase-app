import { useAppDispatch, useAppSelector } from '../../app/store/store'
import { Button } from 'semantic-ui-react'
import { increment, decrement, incrementByAmount } from './testSlice'
import { openModal } from '../../app/common/modals/modalSlice';

export default function Scratch() {

  const {data} = useAppSelector(state => state.test)
  const dispatch = useAppDispatch();

  return (
    <div>
        <h1>Scratch page</h1>
        <h3>The data is: {data}</h3>
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
        <Button onClick={() => dispatch(incrementByAmount(10))}>Increment by 10</Button>
        <Button onClick={() => dispatch(openModal({type: 'TestModal', data: data}))} color='teal' content='Open modal'>
          Increment by 10
        </Button>
    </div>
  )
}

