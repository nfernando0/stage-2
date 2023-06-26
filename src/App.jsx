import './App.css'

import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </>
  )
}

export default App
