import React, { useState } from "react";
import eventEmitter from "./eventEmitter";

const SimpleButton = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter+1)
        eventEmitter.emit('event', {counter: counter})
    }
    return(
        <button onClick={handleClick}>Emit</button>
    );
}

export default SimpleButton;