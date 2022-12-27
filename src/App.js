import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Main from './components/Main';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Register" element={<Signup/>}/>
        <Route exact path='/Home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
