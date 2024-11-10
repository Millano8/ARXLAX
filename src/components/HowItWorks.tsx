import React from 'react';

const steps = [
  {
    title: "Realiza tu Pedido",
    description: "Selecciona los productos que deseas y envíanos tu solicitud por WhatsApp",
    image: "https://img.icons8.com/clouds/200/purchase-order.png"
  },
  {
    title: "Lo Mandamos a China",
    description: "Gestionamos tu pedido directamente con proveedores confiables en China",
    image: "https://img.icons8.com/clouds/200/china.png"
  },
  {
    title: "Seguimiento 24/7",
    description: "Te proporcionamos un código para que puedas rastrear tu pedido en tiempo real",
    image: "https://img.icons8.com/clouds/200/search.png"
  },
  {
    title: "Recibe en Casa",
    description: "Tu producto llega directamente a la puerta de tu casa",
    image: "https://img.icons8.com/clouds/200/home.png"
  }
];

export function HowItWorks() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-12">¿Cómo Funciona?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <img src={step.image} alt={step.title} className="w-24 h-24 mx-auto"/>
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                Paso {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}