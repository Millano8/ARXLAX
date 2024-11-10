import React from 'react';

export function AboutUs() {
  return (
    <div className="bg-indigo-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">¿Quiénes Somos?</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed">
            Somos un grupo de amigos apasionados por conectar a las personas con productos increíbles de todo el mundo. 
            Nuestra misión es simple: hacer que la importación sea accesible, transparente y confiable para todos.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            Con años de experiencia en comercio internacional, nos especializamos en traer productos de calidad 
            directamente desde China hasta tu puerta, garantizando los mejores precios y un servicio personalizado.
          </p>
        </div>
      </div>
    </div>
  );
}