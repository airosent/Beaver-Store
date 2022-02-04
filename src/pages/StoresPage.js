import React from "react";
import StoreTable from '../components/StoreTable';
import ZipSearch from "../components/ZipSearch";

function StoresPage({ stores }) {
    return (
        <>
        <article className="App-article">
            <h2>Find a location near you!</h2>
            <p>Type in your zipcode to the form below
                 to locate the closest Beaver Store!</p>
            <StoreTable stores={stores} />
            <ZipSearch />
        </article>
        </>
    )
}
export default StoresPage;