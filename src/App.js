import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Login from './component/Login'
import Home from './component/Home.jsx';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider  >
      <div className="App" >
      <Router><Routes>
      <Route path='/' element={<Home className="home"></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      </Routes></Router>
    
    
    </div>
    </ChakraProvider >

  );
}

export default App;
