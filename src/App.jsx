import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import Carrinho from './components/Carrinho.jsx'
import {useState} from 'react'


function App() {

  const [carrinho, setCarrinho] = useState([])

  const addToCart = (item) => {
    setCarrinho([...carrinho, item])
  }
const total = carrinho.reduce((acc, item) => acc + item.price, 0)

  return (
    <div className="app">
      <Header carrinho={carrinho} />
      <Hero />
      <Menu  addToCart={addToCart}/>
      <Footer />
      <Carrinho carrinho={carrinho} total={total} />
    </div>
  )
}

export default App