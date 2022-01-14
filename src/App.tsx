import { useState } from 'react';
import './App.css';
import eventEmitter from './eventEmitter';
import SimpleButton from './simpleButton';
import SimpleDiv from './simpleDiv';

const App = () => {
  const [counter,setCounter] = useState(0)
  const handleEmit = (data:any) => {
    setCounter(data.counter)
  }
  eventEmitter.addListener('event',handleEmit)
  return (
      <>
        <SimpleButton/>
        <SimpleDiv counter={counter}/>
      </>
  );
}

export default App;
