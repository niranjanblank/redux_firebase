import Users from './components/Users';
import './App.css';
import { useEffect } from 'react';
import fetchUsersData from './store/userActions';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchUsersData())
    },[])
 
  return (
    <div className="App">
    <Users/>
    </div>
  );
}

export default App;
