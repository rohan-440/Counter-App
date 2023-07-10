import * as React from 'react';
import CounterCard from './Components/CounterCard';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './App.css';
import { useState } from 'react';
import Header from './Components/Header';

function App() {


  const INC = () => {
    return (<CounterCard />)
  }

  const [data, setData] = useState([]);

  const onAdd = event => {
    setData(data.concat(<INC />))
  }

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className='main-counter'>
        <CounterCard />

      </div>
      <div className='main'>
        <Button onClick={onAdd} variant="contained" endIcon={<AddIcon />}>
          Add
        </Button>
        {data}
      </div>



    </div>
  );
}

export default App;
