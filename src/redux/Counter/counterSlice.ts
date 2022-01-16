import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
    count: 4
}

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        setCounter(state: any, action: PayloadAction<any>) {
            return ({...state, count : action.payload})
        } , 
        increment(state:any){
            return ({...state, count : state.count+1});
        },
        decrement(state:any){
            return ({...state, count : state.count-1});
        }
    }
    })

export const {setCounter,increment,decrement} = counterSlice.actions;

export default counterSlice.reducer;
