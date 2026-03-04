import { useState } from 'react'

function Carrinho({ carrinho, total, removeFromCart }) {
    const [minimizado, setMinimizado] = useState(false)

    const finalizarPedido = () => {
        const itens = carrinho.map(item =>
            `- ${item.name}: R$ ${item.price.toFixed(2)}`
        ).join('\n')

        const mensagem =
`Olá! Gostaria de fazer um pedido:

${itens}

Total: R$ ${total.toFixed(2)}

Forma de pagamento: ?
Retirada no local ou entrega?`

        const numero = '5511999999999'
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

        const link = isMobile
            ? `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`
            : `https://web.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`

        window.open(link)
    }

    return (
        <div className={`carrinho ${minimizado ? 'minimizado' : ''}`}>
            <div className="carrinho-header">
                <h3>🛒 Seu Pedido ({carrinho.length})</h3>
                <button
                    className="btn-minimizar"
                    onClick={() => setMinimizado(!minimizado)}
                >
                    {minimizado ? '▲' : '▼'}
                </button>
            </div>

            {!minimizado && (
                <>
                    {carrinho.map((item, index) => (
                        <div key={index} className="carrinho-item">
                            <p>{item.name}</p>
                            <div className="carrinho-item-right">
                                <p>R$ {item.price.toFixed(2)}</p>
                                <button 
                                    className="btn-lixeira"
                                    onClick={() => removeFromCart(index)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))}
                    <p className="carrinho-total">Total: R$ {total.toFixed(2)}</p>
                    <button 
                        className="btn-finalizar"
                        onClick={finalizarPedido}
                    >
                        Finalizar no WhatsApp
                    </button>
                </>
            )}
        </div>
    )
}

export default Carrinho
