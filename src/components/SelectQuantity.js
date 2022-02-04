import React, {useState} from "react";
import { BiCaretUpSquare, BiCaretDownSquare } from 'react-icons/bi';

function SelectQuantity() {
    const [quantity, setQuantity] = useState(0);
    
    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1)
    const decrement = () => setQuantity(quantity === 0 ? 0 : quantity - 1)
    return (
        <div>
            <BiCaretDownSquare onClick={decrement} class="pointer"/>
            <span class="qv">{quantity}</span>
            <BiCaretUpSquare onClick={increment} class="pointer"/>
        </div>
    );
}

export default SelectQuantity;


