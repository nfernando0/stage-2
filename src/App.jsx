import './App.css'
import Button from './components/Button'
import List from './components/List'

function App() {

  let nama = "Fernando"
  
  return (
    <>

    <div className='d-block justify-content-center min-vh-100 gap-3 align-items-center'>
      <h1>Hello {nama}</h1>
      <List listData="Hello World"/>
      <List listData="Hello World 1"/>
      <Button listData="Hello World"/>
      <Button />
      <Button />
    </div>
    </>
  )
}

export default App
