
import { increment, decrement, setCounter } from '../redux/Counter/counterSlice';
import {store} from '../redux/store'
import eventEmitter from '../eventEmitter';
import { simpleButtonEvents } from '../components/buttonWidget/simpleButtonEventEnum';

const handleIncrement = () => {
    store.dispatch(increment())
  }
  const handleDecrement = () => {
      store.dispatch(decrement())
  }

eventEmitter.addListener(simpleButtonEvents.Increase,handleIncrement)
eventEmitter.addListener(simpleButtonEvents.Decrease,handleDecrement)