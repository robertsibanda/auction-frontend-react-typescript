import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/main/Home'

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/create-account' Component={Signup}/>
      </Routes>
    </BrowserRouter>
  
      
    </>
  )
}

export default App
