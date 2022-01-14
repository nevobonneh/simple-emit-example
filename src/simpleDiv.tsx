import React, { useState } from "react";
import eventEmitter from "./eventEmitter";


const SimpleDiv = (props:Props) => {
    const { counter } = props;

    return(
        <div>{counter}</div>
    );
}

interface Props {
    counter: Number
}
export default SimpleDiv