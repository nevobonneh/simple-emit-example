import React, { useState } from 'react';

import eventEmitter from '../../eventEmitter';

const SimpleButton = () => {
    const handleIncreaseClick = () => {
        eventEmitter.emit('incrementEvent')
    }
    const handleDecreaseClick = () => {
        eventEmitter.emit('decrementEvent')
    }

    return (
        <>
         <button onClick={handleIncreaseClick}>+</button>
         <button onClick={handleDecreaseClick}>-</button>
        </>
    );
}

export default SimpleButton;
