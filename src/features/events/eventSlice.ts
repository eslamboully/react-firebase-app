import { createSlice } from "@reduxjs/toolkit"
import { AppEvent } from "../../app/types/event"
import { sampleData } from "../../app/api/sampleData"

type State = {
    events: AppEvent[]
}

const initialState: State = {
    events: sampleData
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        createEvent: (state, action) => {
            state.events.push(action.payload)
        },
        updateEvent: (state, action) => {
            state.events = state.events.map(event => event.id === action.payload.id ? action.payload : event)
        },
    }
})

export const { createEvent, updateEvent } = eventSlice.actions