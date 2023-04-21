import './App.css';
import {Routes,Route } from 'react-router-dom';
import Users from './Components/Users';
import SearchField from './Components/Search';
function App() {
  return (
     <Routes>
      <Route path='/popular' element={<Users/>}/>
      <Route path='/' element={<SearchField/>}/>
     </Routes>
  );
  //Here we have created routing using react-router-dom
}

export default App;
