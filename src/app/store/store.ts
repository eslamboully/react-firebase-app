import { configureStore } from "@reduxjs/toolkit";
import { testSlice } from "../../features/scratch/testSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { eventSlice } from "../../features/events/eventSlice";
import { modalSlice } from "../common/modals/modalSlice";

export const store = configureStore({
    reducer: {
        test: testSlice.reducer,
        events: eventSlice.reducer,
        modals: modalSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector