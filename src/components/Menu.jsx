import menu from '../data/menu'

function Menu({ addToCart }) {
  return (
    <section className="menu" id="menu">
      <h2>Nosso Cardápio</h2>
      {menu.map((category) => (
        <div key={category.id}>
          <h3 className="categoria-titulo">{category.category}</h3>
          <div className="categoria-grid">
            {category.items.map((item) => (
              <div key={item.id} className="item-card">
                <p className="item-name">{item.name}</p>
                <p className="item-description">{item.description}</p>
                <div className="item-footer">
                  <span className="item-price">R$ {item.price.toFixed(2)}</span>
                  <button 
  className="btn-adicionar"
  onClick={() => addToCart(item)}
>
  + Adicionar
</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default Menu