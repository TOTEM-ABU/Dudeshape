import { Footer, Navbar } from './components'
import { BlogSection, CommentsSection, HomeSection, OurProductsSection, PartnersSection, StatisticsSection } from './pages'

const App = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <PartnersSection />
      <OurProductsSection />
      <StatisticsSection />
      <BlogSection />
      <CommentsSection />
      <Footer />
    </>
  )
}

export default App