import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addFoodToCustomer} from "../redux/features/customerSlice";

interface CustomerCardType {
    id: string;
    name: string;
    food: string[]
}

const CustomerCard = ({id, name, food}: CustomerCardType) => {

    const dispatch = useDispatch()

    const [customerFoodInput, setCustomerFoodInput] = useState("");

    const addCustomerHandler = () => {
        if (!customerFoodInput) return

        dispatch(addFoodToCustomer({
            id,
            food: customerFoodInput
        }))

        setCustomerFoodInput("")
    }

    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food">
                    {food.map(item => {
                        return <p>{item}</p>
                    })}
                </div>
                <div className="customer-food-input-container">
                    <input type="text" value={customerFoodInput} onChange={e => setCustomerFoodInput(e.target.value)}/>
                    <button onClick={addCustomerHandler}>ADD</button>
                </div>
            </div>
        </div>
    );
};


export default CustomerCard;
