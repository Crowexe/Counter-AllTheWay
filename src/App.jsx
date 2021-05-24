import "./App.css";
import { useState } from "react";


const App = () => {

    const [counter, setCounter] = useState(0);
    const [jumper, setJumper] = useState(1);

    const add = () => {
        setCounter(counter + jumper);
    }

    const subtract = () => {
        setCounter(counter - jumper);
    }

    const addJump = () => {
        setJumper(jumper + 1);
    }

    const subtractJump = () => {
        setJumper(jumper - 1);
    }

    return (
        <main>
            <div className="all">
                <section id="count">
                    <h1>Count</h1>
                    <h2>{counter}</h2>
                    <button id="addB" onClick={add}> + </button>
                    <button id="resetB" onClick={() => setCounter(0)}> Reset </button>
                    <button id="substB" onClick={subtract}> - </button>
                    
                </section>
                <div class="vl"></div>
                <section id="jump">
                    <h1>Jump</h1>
                    <h2>{jumper}</h2>
                    <button id="addB" onClick={addJump}> + </button>
                    <button id="resetB" onClick={() => setJumper(1)}> Reset </button>
                    <button id="substB" onClick={subtractJump}> - </button>
                    
                </section>
            </div>
        </main>
    );
};

export default App;