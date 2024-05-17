
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import PricingPage from './pages/PricingPage'
import SellingPage from './pages/SellingPage'

import TrackingPage from './pages/TrackingPage'
import { LanguageProvider } from './contexts/language-context'

function App() {

  return (
    <LanguageProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/selling' element={<SellingPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
