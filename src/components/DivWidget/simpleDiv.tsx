import { useState } from 'react';
import { TextField } from '@material-ui/core';

import eventEmitter from '../../eventEmitter';
import { simpleDivEvents } from './simpleDivEventEnum';

const SimpleDiv = (props:Props) => {
    const [value, setValue] = useState<number>(0);

    const { counter } = props;

    const changeCounterValue = (event: any) => {
        setValue(+event.target.value);
    }

    const checkEnter = (keyPress: any) =>{
        if (keyPress.key === 'Enter'){
            eventEmitter.emit(simpleDivEvents.SetValue,value)
        }
    }

    return (
        <>
            <div>counter : {counter}</div>
            <TextField
                value={value}
                onChange={changeCounterValue}
                onKeyPress={checkEnter}
            />
        </>
    );
}

interface Props {
    counter: any
}
export default SimpleDiv;
