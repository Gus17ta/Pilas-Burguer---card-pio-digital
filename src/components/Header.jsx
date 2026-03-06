function Header({ carrinho }) {


  return (
    <header className="header">
       <div className="logo">
        <span className="Logo-icon"> 🍔</span>
        <span className="logo-text">Hamburgues Artesanais</span>     
        </div> 
     <nav className="nav">
    <a href="#menu"> Cardàpio</a>
    <a href="#contato">Contato</a>
    <span className="carrinho-icon">🛒 {carrinho.length}</span>
    </nav>
    </header>
  )
}
export default  Header