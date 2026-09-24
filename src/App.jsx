import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FeedbackSection from './components/FeedbackSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content"><Hero /><TrustBar /><Services /><Gallery /><Testimonials /><About /><FeedbackSection /><Contact /></main><Footer /></>
}
