import './App.css';
import { useEffect } from 'react';
import Routings from './Components/Layout/Routings';
import Api from './Api';
import Dynamics from './Dynamics';

function App() {
  const get_Categories =async()=> {
    try {
        const request = new Api;
        const response = await request.get_Categories();

        if(response != null) {
            const dynamic = new Dynamics;
            await dynamic.set_Categories(response.data)
        }
    }

    catch(error) {
        console.log(error)
    }
  }

  const get_SubCategories =async()=> {
    try {
      const request = new Api;
      const response = await request.get_SubCategories();

      if(response != null) {
        const dynamic = new Dynamics;
        await dynamic.set_Subcategories(response.data)
      }
    }

    catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
      get_Categories()
      get_SubCategories()
  }, []);
  
  return (
    <div className="App">
        <Routings/>
    </div>
  );
}

export default App;
