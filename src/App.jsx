import './App.css'
import { Navigate, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroStrip from './components/HeroStrip'
import ProductCategories from './components/ProductCategories'
import FounderHighlight from './components/FounderHighlight'
import ServicesOverview from './components/ServicesOverview'
import Partnership from './components/Partnership'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import Product from './pages/Product'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
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
      <Route
        path="/about-us"
        element={
          <div>
            <AboutUs />
          </div>
        }
      />
      <Route
        path="/services"
        element={
          <div>
            <Services />
          </div>
        }
      />
      <Route
        path="/contact-us"
        element={
          <div>
            <ContactUs />
          </div>
        }
      />
      <Route path="/products" element={<Navigate to="/products/api" replace />} />
      <Route path="/product" element={<Navigate to="/products/api" replace />} />
      <Route
        path="/products/:productType"
        element={
          <div>
            <Product />
          </div>
        }
      />
      </Routes>
    </>
    

    
  )
}

export default App
