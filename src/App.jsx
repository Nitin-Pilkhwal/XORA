import './App.css'
import Features from './sections/Features'
import Header from './sections/Header'
import Hero from './sections/Hero'

const App = () => {

  return (
    // overflow-hidden removes the scrollbar from the page
    <main className='overflow-hidden'>
      <Header />
      <Hero />
      <Features />
    </main>
  )
}

export default App