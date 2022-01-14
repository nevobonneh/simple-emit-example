import React, { useState } from "react";
import eventEmitter from "./eventEmitter";


const SimpleDiv = () => {
    const [value, setValue] = useState<String>('')
    const handleEvent = (data: any) =>{
        setValue(data.counter)
    }
    eventEmitter.addListener('event',handleEvent)

    return(
        <div>{value}</div>
    );
}

export default SimpleDiv