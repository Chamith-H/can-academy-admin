import { useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Sider from './Components/Layout/Sider';
import Routings from './Components/Layout/Routings';

function App() {

  const [title, setTitle] = useState('');
  const [options, setOptions] = useState([])

  const handle_Sider =( title )=> {
    setTitle(title)
  }

  return (
    <div className="App">
        <div className="Panel">
            <Sider TabAction={handle_Sider}/>
        </div>

        <div className="Contents">
            <Routings/>
        </div>
    </div>
  );
}

export default App;
