
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {
  return(
    <>
      <div className='relative'>
        <img className='w-15 h-15 absolute top-5 left-5 md:left-10' src="/irritator-dark.png" alt="" />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App
