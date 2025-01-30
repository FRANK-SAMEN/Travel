import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Tourisme from './components/Tourisme'
import Flight from './components/Flight'
import Hotels from './components/Hotels'
import Appartement from './components/Appartement'
import Voiture from './components/Voiture'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Header />
      <Flight />
      <Tourisme />
      <Hotels />
      <Appartement />
      <Voiture />
      <Footer/>
    </div>
  );
}
export default App
