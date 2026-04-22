import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Name from './components/Name'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <br/><br/>
    <h1>HELLO MAKKALE!!</h1>
    <NavBar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/state' element={<StateBasics/>}/>
      <Route path='/name' element={<Name/>}/>
      <Route path='api' element={<Api/>}/>
    </Routes>
    </>
  )
}

export default App
