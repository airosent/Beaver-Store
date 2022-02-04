import React from "react";
import GroceryTable from '../components/GroceryTable';

function OrderPage({ items }) {
    return (
        <>
        <article className="App-article">
            <h2>Order from the list of "dam" good items below.</h2>
            <p>Select the quantity of each item you wish to purchase (up to 10).</p>
            <GroceryTable items={items}/>
        </article>
        <button type="submit">
            Submit
        </button>
        </>
    )
}

export default OrderPage;