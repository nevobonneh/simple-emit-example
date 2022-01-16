// import {useSelector} from 'react-redux';
import { createSelector } from 'reselect';

const getCounterState = (state: any) => state.count;

const counterSelector = createSelector([getCounterState], (state: any) => {
    console.log(state)
    return state.count
}
);

export default counterSelector; 

    