import React from "react";
import { useState } from "react/cjs/react.development";


function ZipSearch() {
    const [zipCode, setZipCode] = useState('')

    return (
        <form action="" method="" >
            <fieldset>
                <legend>Enter your 5 digit zip code:</legend>
                <label for="zip">Zip code</label>
                <input type="number" required
                    value={zipCode}
                    id="zip"
                    name="zipCode"
                    placeholder="12345"
                    size="5"
                    maxLength="5"
                    min="5"
                    onChange={e => setZipCode(e.target.value)}
                />

                <label for="alert">
                    <button name="alert" onClick={e => {
                        alert(`You entered ${zipCode}`);
                        e.preventDefault();
                        }}>Submit</button>
                </label>
            </fieldset>
        </form>
    )
}

export default ZipSearch;