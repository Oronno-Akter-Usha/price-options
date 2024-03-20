import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/NavBar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
    <h2></h2>
    <PriceOptions></PriceOptions>
    </>
  )
}

export default App
