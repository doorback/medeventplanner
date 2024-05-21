import Image from 'next/image';
import React from "react";
import Link from 'next/link';


const Home = () => {
  return (

<section className ="flex-start flex-col paddings mb-16">
      <div className="rectangle-container">
      <div className="rectangle">
      <div className="image-container">  
      <img src="/laptop.png" alt="Left Image" className="left-image" />
      </div>
      <div className="text">
      <p>Создавайте программы для ваших мероприятий с помощью MedEventPlanic</p>
    </div>
  </div>
  <button className="button-create">
  Создать программу
</button>
</div>

{/* SECTION 2  */}
<section className="section-container">
      <div className="content-container">
        <Image src="/tablet.png"
          width={500}
          height={400}
          alt="MedEventPlanic"
          className="laptop-image"
        />

        <div className="text-container">
          <p className="program-title">Создайте программу за 5 простых шагов:</p>
          
          <div className="steps-container">
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className="step-item">
                <div className={`step-indicator ${index === 0 ? 'step-indicator-active' : ''}`}></div>
                {index === 0 && (
                  <p className="step-description">
                    Создайте учетную запись Canva, чтобы приступить к дизайну сравнительной таблицы.
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <button className="button-create2">
  Создать программу
</button>


    </section>

{/* SECTION 3  */}
<section className="section-three">
<div className="flex p-8"> 
  <div className="flex-1">
    <img src="/book.png" alt="Пример дизайна" className="w-full h-auto mr-8" />
  </div>
  <div className="flex-1 px-6 ml-8"> 
    <h2 className="text-2xl font-bold text-gray-100 mb-4">Поделитесь своим дизайном или распечатайте программу в высоком разрешении</h2>
    <p className="text-description">
      Хотите узнать мнение клиента или коллеги? Для этого нужно всего лишь нажать кнопку «Поделиться», чтобы предоставить доступ к редактированию или комментированию вашей таблицы. Все, с кем вы поделились дизайном, смогут просмотреть его на любом компьютере или устройстве iPhone, iPad или Android.
    </p>
    <p className="text-description">
      Нужно распечатать вашу сравнительную таблицу? Нет проблемы. Закончив редактирование, нажмите кнопку «Скачать» и сохраните законченный дизайн в виде файла PDF или PNG высокого разрешения. Отправьте этот файл на печать или по электронной почте вашему клиенту или команде, нажав кнопку «Поделиться». Не забудьте поздравить себя с успешно выполненной работой!
    </p>
  </div>
</div>

{/* Часть 4  */}
<h2 className ="LastText mt-16 " >Шаблоны программ </h2>
<div className="flex-1">
<p className="Text99 flex-1">Не тратьте время на сложные программы. С помощью готовых шаблонов MedEventPlanic можно легко создать красивые сравнительные таблицы. Просто нажмите на диаграмму и добавьте ваши данные - все будет готово за считанные минуты. Для начала выберите шаблон.</p>
</div>

<div className="cards-container mt-8">
  <div className="card">
    <img src="Rectangle 45.png" alt="Шаблон 1"/>
  </div>
  <div className="card">
    <img src="Rectangle 46.png" alt="Шаблон 2"/>
  </div>
  <div className="card">
    <img src="Rectangle 47.png" alt="Шаблон 3"/>
  </div>
  <div className="card">
    <img src="Rectangle 48.png" alt="Шаблон 4"/>
  </div>
  <div className="card">
    <img src="Rectangle 49.png" alt="Шаблон 5"/>
  </div>
</div>
</section>  

</section>  
  )
}

export default Home;