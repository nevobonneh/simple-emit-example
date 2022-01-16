import eventEmitter from '../eventEmitter';
import {store} from '../redux/store'
import { setCounter } from '../redux/Counter/counterSlice';
import { simpleDivEvents } from '../components/DivWidget/simpleDivEventEnum';


const handleEmitSetCounter = (value : any) => {
    store.dispatch(setCounter(value))
}

eventEmitter.addListener(simpleDivEvents.SetValue,handleEmitSetCounter)
