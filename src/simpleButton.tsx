import React, { useState } from "react";
import eventEmitter from "./eventEmitter";

const SimpleButton =() => {
    return(
        <button onClick={() => eventEmitter.emit('event')}>Emit</button>
    );
}

export default SimpleButton;