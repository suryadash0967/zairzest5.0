import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
      <Footer/>
    
    </>
  )
}

export default App
