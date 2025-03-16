import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Signup from './pages/Signup'

function App() {

  return (
  <div>

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/signup" element={<Signup/>} />
</Routes>
  </div>
  )
}

export default App
