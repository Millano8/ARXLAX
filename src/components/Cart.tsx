import React from 'react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { items, removeFromCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppOrder = () => {
    const orderText = items
      .map(item => `- ${item.quantity}x ${item.title} ($${item.price * item.quantity})`)
      .join('\n');
    const message = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n${orderText}\n\nTotal: $${total.toFixed(2)}`;
    window.open(`https://wa.me/+5493388411005?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Tu Carrito</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">Cantidad: {item.quantity}</p>
                  <p className="text-indigo-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-xl font-bold mb-4">
              Total: ${total.toFixed(2)}
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Solicitar Pedido por WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
}