import React from 'react'
import Image from 'next/image';

const SponsorLogoUpload = () => {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-sponsors stext-2xl font-bold text-center mb-10">Перетащите логотипы спонсоров сюда или выберите файл</h1>
        <div className="grid grid-cols-5 gap-4">
          {["Генеральные спонсоры", "Серебряные спонсоры", "Платиновые спонсоры", "Экспоненты", "Инд. партнеры"].map((category, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg text-center">
              <img src={`/Rectangle 45.png`} alt="logo placeholder" className="mx-auto w-24 h-24 object-cover" />
              <p className="text-gray-600 mt-2">{category}</p>
            </div>
          ))}
        </div>
        <button className="button-sponsors mt-6 px-6 py-2 rounded hover:bg-blue-600 w-full">Далее</button>
      </div>
    );
  };

export default SponsorLogoUpload;