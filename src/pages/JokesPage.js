import react from "react";
import { GiWoodPile, GiWaterfall, GiBeaver } from "react-icons/gi";
import Logo from "../components/Logo";

function JokesPage() {
    return (
        <> {/* fragment */}
        <article className = 'App-article'>
            <h2>Read some "dam" good jokes while you're here! <GiBeaver></GiBeaver></h2>
            <h3>What did the Beaver say to the tree?</h3>
            <p>It's been nice GNAWING you.</p>
            <h3>Where do Beavers sleep?</h3>
            <p>On the RIVER BED.</p>
            <h3>Do you know what a Beaver's favorite snack is?</h3>
            <p>Wood CHIPS!</p>
            <h3>Why was the Beaver not arrested when he jumped into the Nile?</h3>
            <p>Because he was a Juve'NILE</p>
            <h3>What does a French Beaver call his dam?</h3>
            <p>Ma'Dame.</p>
            <GiWoodPile className="products" />
            <GiWaterfall className="products"/>
            <GiWoodPile className="products"/>
            <GiWaterfall className="products"/>
            <GiWoodPile className="products"/>
            <div>
            <button> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer noopener">
                Click for the next joke!
            </a>
            </button>
            <p>
            <GiWoodPile className="products" />
            <GiWaterfall className="products"/>
            <GiWoodPile className="products"/>
            <GiWaterfall className="products"/>
            <GiWoodPile className="products"/>   
            </p>
            </div>
            <div>
            <Logo />
            </div>
        </article>
        </>
    );
}

export default JokesPage;