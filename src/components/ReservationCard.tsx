import React from 'react';
import {useDispatch} from "react-redux";
import {removeReservation} from "../redux/features/reservationSlice";
import {addCustomer} from "../redux/features/customerSlice";
import {v4 as uuid} from 'uuid'

type ReservationCardTypes = {
    name: string
    index: number
}

const ReservationCard = ({name, index}: ReservationCardTypes) => {

    const dispatch = useDispatch()

    const removeHandler = () => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
            id: uuid(),
            name,
            food: []
        }))
    }

    return <div onClick={removeHandler} className="reservation-card-container">{name}</div>
};

export default ReservationCard;
