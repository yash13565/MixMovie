import logo from './logo.svg';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Users from './Components/Users';
import SearchField from './Components/Search';
function App() {
  return (
     <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/popular' element={<SearchField/>}/>
     </Routes>
  );
}

export default App;
