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

const removeFromCart = (index) => {
    setCarrinho(carrinho.filter((_, i) => i !== index))
}

  return (
    <div className="app">
      <Header carrinho={carrinho} />
      <Hero />
      <Menu  addToCart={addToCart}/>
      <Footer />
      <Carrinho carrinho={carrinho} 
      total={total} 
      removeFromCart={removeFromCart}
      />
    </div>
  )
}

export default App