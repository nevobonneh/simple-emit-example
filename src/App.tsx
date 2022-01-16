import { useEffect, useState } from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import './App.css';
import SimpleButton from './components/buttonWidget/simpleButton';
import SimpleDiv from './components/DivWidget/simpleDiv';
import counter from './selectors/counterSelector'
import { decrement, increment, setCounter } from './redux/Counter/counterSlice';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import counterSelector from './selectors/counterSelector';
import './eventMapping/counterEventMapping'
import './eventMapping/simpleButtonEventMapping'

const App = () => {
 // const [counter,setCounter] = useState(0)
 const counterSum = useSelector(counterSelector)


  return (
      <>
          <SimpleButton />
          <SimpleDiv counter={counterSum}/>
      </>
  );
}

export default App;
