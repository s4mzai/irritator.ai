
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'

function App() {
  return(
    <ThemeProvider>
      <div className='bg-white dark:bg-black'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
    
  )
}

export default App
