import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Event from './component/Events'
import Login from './component/Login'
import Nav from './component/Nav'
import Home from './component/Home.jsx';
import Dashboard from './component/admin/Dashboard'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider  >
      <div className="App" >
      <Nav className="navbar" />
      <Router><Routes>
      <Route path='/' element={<Home className="home"></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/event' element={<Event></Event>}></Route>
      <Route path='/admin' element={<Dashboard></Dashboard>}></Route>
      </Routes></Router>
    
    
    </div>
    </ChakraProvider >

  );
}

export default App;
