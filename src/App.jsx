import { Footer, Navbar } from './components'
import { BlogSection, HomeSection, OurProductsSection, PartnersSection, StatisticsSection } from './pages'

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <PartnersSection />
      <OurProductsSection />
      <StatisticsSection />
      <BlogSection />
      <Footer />
    </>
  )
}

export default App