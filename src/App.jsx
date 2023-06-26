import './App.css'

import { Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
