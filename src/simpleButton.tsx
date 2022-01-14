import React, { useState } from "react";
import { EventEmitter } from "stream";
import eventEmitter from "./eventEmitter";

const SimpleButton = () => {
    const [counter, setCounter] = useState(0);
    eventEmitter.on('event', () => setCounter(counter+1))
    return(
        <button onClick={() => eventEmitter.emit('event', {counter: counter})}>Emit</button>
    );
}

export default SimpleButton;