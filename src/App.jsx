import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Middle from './components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portifolio from './Components/Portifolio/Portifolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'

import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='body'>
        <Middle/>
        <Destinations/>
        <Portifolio/>
        <Reviews/>
        <Questions/>
        <Subscribe/>
      </div>
        <Footer/>
    </div>
  )
}

export default App
