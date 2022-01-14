import React, { useState } from "react";
import eventEmitter from "./eventEmitter";


const SimpleDiv = () => {
    const [value, setValue] = useState<String>('')
    const handleEvent = () =>{
        setValue('Hello World!')
    }
    eventEmitter.addListener('event',handleEvent)

    return(
        <div>{value}</div>
    );
}

export default SimpleDiv