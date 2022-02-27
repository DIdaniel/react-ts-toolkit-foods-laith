import React, {useState} from "react";
import "./App.css";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./redux/store";
import ReservationCard from "./components/ReservationCard";
import {addReservation} from "./redux/features/reservationSlice";
import CustomerCard from "./components/CustomerCard";

function App() {


    const [reservationInputName, setReservationInputName] = useState("")


    const reservations = useSelector((state: RootState) => state.reservations.value)
    const customers = useSelector((state: RootState) => state.customers.value)

    console.log(reservations)

    const dispatch = useDispatch();

    const handleAddReservations = () => {
        if (!reservationInputName) return
        dispatch(addReservation(reservationInputName))
        setReservationInputName("")
    }


    return (
        <div className="App">
            <div className="container">
                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            {
                                reservations.map((reservation, index) => <ReservationCard name={reservation}
                                                                                          key={index} index={index}/>)
                            }
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <input value={reservationInputName}
                               onChange={e => setReservationInputName(e.target.value)}/>
                        <button onClick={handleAddReservations}>Add</button>
                    </div>
                </div>
                <div className="customer-food-container">
                    {customers.map(customer => {
                        return <CustomerCard food={customer.food} id={customer.id} name={customer.name}/>;


                    })}
                </div>
            </div>
        </div>
    );
}

export default App;