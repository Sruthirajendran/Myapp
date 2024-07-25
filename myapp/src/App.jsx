import { Routes, Route } from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import State from './components/State'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import Mapping from './components/Mapping'
import Api from './components/Api'
import Apinew from './components/Apinew'
import Poke from './components/Poke'
function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/s' element={<Signup />} />
        <Route path='/' element={<Login />} /> 
        <Route path='/st' element={<State />} />
        <Route path='/c' element={<Counter />} />
        <Route path='/g' element={<Greeting />} />
        <Route path='/m' element={<Mapping />} />
        <Route path='/a' element={<Api />} />
        <Route path='/ap' element={<Apinew />} />
        <Route path='/po' element={<Poke />} />

      </Routes>
      
    
    
      
    </>
  )
}

export default App
