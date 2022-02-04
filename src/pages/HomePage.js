import React from "react";
import {GiWoodPile, GiWaterfall} from 'react-icons/gi'
import BeaverLogo from "../components/BeaverLogo";

function HomePage() {
    return (
        <> {/* fragment */}
        <article className = 'App-article'>
            <h2>Order online and pick up from your closest Beaver Store!</h2>
            <p>Use the tabs above to
                search for a store
                and/or order online! (p.s. Don't forget to read our Beaver jokes!)
            </p>
            <div>
                <BeaverLogo/>
                </div>
            <GiWoodPile className="products" />
            <GiWaterfall className="products"/>
            <GiWoodPile className="products"/>
            <GiWaterfall className="products"/>
            <GiWoodPile className="products"/>
        </article>
        </>
    );
}

export default HomePage;