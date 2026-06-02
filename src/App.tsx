import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import WhoStrip from './components/WhoStrip'
import Pillars from './components/Pillars'
import ScrollTicker from './components/ScrollTicker'
import VisionBlock from './components/VisionBlock'
import ImpactSection from './components/ImpactSection'
import OriginSection from './components/OriginSection'
import NewsSection from './components/NewsSection'
import AboutPage from './pages/AboutPage'
import GrantsPage from './pages/GrantsPage'
import ImpactPage from './pages/ImpactPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import OpportunitiesPage from './pages/OpportunitiesPage'
import ArchivePage from './pages/ArchivePage'
import AccessibilityPage from './pages/AccessibilityPage'
import CookiePolicyPage from './pages/CookiePolicyPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import ComplaintsPage from './pages/ComplaintsPage'

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <WhoStrip />
      <Pillars />
      <ScrollTicker />
      <VisionBlock />
      <ImpactSection />
      <OriginSection />
      <NewsSection />
    </main>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<main id="main-content"><AboutPage /></main>} />
        <Route path="/grants" element={<main id="main-content"><GrantsPage /></main>} />
        <Route path="/impact" element={<main id="main-content"><ImpactPage /></main>} />
        <Route path="/news" element={<main id="main-content"><NewsPage /></main>} />
        <Route path="/contact" element={<main id="main-content"><ContactPage /></main>} />
        <Route path="/opportunities" element={<main id="main-content"><OpportunitiesPage /></main>} />
        <Route path="/archive" element={<main id="main-content"><ArchivePage /></main>} />
        <Route path="/accessibility" element={<main id="main-content"><AccessibilityPage /></main>} />
        <Route path="/cookie-policy" element={<main id="main-content"><CookiePolicyPage /></main>} />
        <Route path="/privacy-policy" element={<main id="main-content"><PrivacyPolicyPage /></main>} />
        <Route path="/terms" element={<main id="main-content"><TermsPage /></main>} />
        <Route path="/complaints" element={<main id="main-content"><ComplaintsPage /></main>} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
