import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroStrip from './components/HeroStrip'
import ProductCategories from './components/ProductCategories'
import FounderHighlight from './components/FounderHighlight'
import ServicesOverview from './components/ServicesOverview'
import Partnership from './components/Partnership'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Header />
            <Hero />
            <HeroStrip />
            <ProductCategories />
            <FounderHighlight />
            <ServicesOverview />
            <Partnership />
            <HowItWorks />
            <Footer />
          </div>
        }
      />
    </Routes>
  )
}

export default App
