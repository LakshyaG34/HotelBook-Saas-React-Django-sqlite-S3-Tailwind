import Hero1 from './components/hero1'
import Hero2 from './components/hero2'
import Hero3 from './components/hero3'
import Hero4 from './components/hero4'
import Hero5 from './components/hero5'
import Navbar from './components/navbar'
import SearchBar from './components/searchBar'

function App() {

  return (
    <div>
      <div className='bg-blue-500 py-2'/>
      <div className='bg-blue-500'>
        <Navbar/>
        <Hero1/>
        <Hero2/>
        <SearchBar/>
      </div>
      <Hero3/>
      <Hero4/>
      <Hero5/>
    </div>
  )
}

export default App
