import Hero2 from './components/hero2'
import Hero3 from './components/hero3'
import Hero4 from './components/hero4'
import Hero5 from './components/hero5'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Hero1 from './components/hero1'
import SearchBar from './components/searchBar'
import Hotel1 from './components/hotels/hotel1'

function App() {

  return (
    <Routes>
      <Route path = "/">
        <Route
          index
          element={
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
          }
        />
        <Route path="about" element={<Hero3 />} />
        <Route path="services" element={<Hero4 />} />
      </Route>
      <Route path = "/hotels">
        <Route
          index
          element={
            <div>
              <div className='bg-blue-500 py-2'/>
              <div className='bg-blue-500'>
                <Navbar/>
                <Hero1/>
                <SearchBar/>
              </div>
              <Hotel1/>
            </div>
          }
        />
      </Route>
    </Routes>
  )
}

export default App
