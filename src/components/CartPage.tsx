import React from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeft, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CartPage() {
  const { items, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppOrder = () => {
    const message = `¡Hola! Me gustaría hacer el siguiente pedido:\n\n${items.map(item => 
      `- ${item.title} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n')}\n\nTotal: $${total.toFixed(2)}`;

    window.open(`https://wa.me/+5493388411005?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-indigo-600 mb-6 hover:text-indigo-700"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Volver a la tienda
      </button>

      <h2 className="text-2xl font-bold mb-6">Tu Carrito</h2>

      {items.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded"/>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-600">Cantidad: {item.quantity}</p>
                  <p className="text-indigo-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="text-xl font-bold mb-4">
              Total: ${total.toFixed(2)}
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Solicitar Pedido por WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
}