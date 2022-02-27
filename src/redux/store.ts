import {configureStore} from '@reduxjs/toolkit'
import reservationSlice from "./features/reservationSlice";
import customerReducer from './features/customerSlice'

export const store = configureStore({
    reducer: {
        reservations: reservationSlice,
        customers: customerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch