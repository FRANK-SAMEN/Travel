import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tourisme from './components/Tourisme'
import Flight from './components/Flight'
import Hotels from './components/Hotels'
import Appartement from './components/Appartement'
import Voiture from './components/Voiture'
import Footer from './components/Footer'
import Payment from './components/payment'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="App  inset-0 max-w-7xl mx-auto">
        <Header />
        <div className="mx-2 sm:mx-4">
          <Flight />
          <Payment />
          <Tourisme />
          <Hotels />
          <Appartement />
          <Voiture />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default App
