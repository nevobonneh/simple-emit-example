import {combineReducers} from 'redux';

import counterReducer from './Counter/counterSlice';

interface MagenStore {
    count : any
}

export default combineReducers<MagenStore>({
    count : counterReducer
});