function Carrinho({ carrinho, total }) {

    const finalizarPedido = () => {
    const itens = carrinho.map(item => 
        `- ${item.name}: R$ ${item.price.toFixed(2)}`
    ).join('\n')

    const mensagem = `Olá! Gostaria de fazer um pedido:\n\n${itens}\n\nTotal: R$ ${total.toFixed(2)}`

   const link = `https://web.whatsapp.com/send?phone=5511932247711&text=${encodeURIComponent(mensagem)}`
    
    window.open(link)
}

  return (
    <div className="carrinho">
      <h3>🛒 Seu Pedido</h3>
      
   {carrinho.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>R$ {item.price.toFixed(2)}</p>
        </div>
      ))}


      <p>Total: R$ {total.toFixed(2)}</p>
     <button onClick={finalizarPedido}>
    Finalizar no WhatsApp
</button>
    </div>
  )
}

export default Carrinho

