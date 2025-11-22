import { Footer, Navbar } from './components'
import { HomeSection, OurProductsSection, PartnersSection } from './pages'

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <PartnersSection />
      <OurProductsSection />
      <Footer />
    </>
  )
}

export default App