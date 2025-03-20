import { createSlice } from "@reduxjs/toolkit"

type State = {
    open: boolean,
    type: string | null,
    data:any
}

const initialState: State = {
    open: false,
    type: null,
    data: null
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.open = true
            state.type = action.payload.type
            state.data = action.payload.data
        },
        closeModal: (state) => {
            state.open = false
            state.type = null
            state.data = null
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions