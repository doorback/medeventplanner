"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

const Planner = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventLocation: '',
    numberOfGuests: '',
    organizers: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="planner-text">Простой планировщик программы мероприятия</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="input-field mb-8">
          <input
            type="text"
            name="eventName"
            placeholder="Название ивента"
            value={formData.eventName}
            onChange={handleChange}
          />
        </div>
        <div className="input-field mb-8">
          <input
            type="text"
            name="eventLocation"
            placeholder="Место проведения"
            value={formData.eventLocation}
            onChange={handleChange}
          />
        </div>
        <div className="input-field mb-8">
          <input
            type="text"
            name="numberOfGuests"
            placeholder="Кол-во залов"
            value={formData.numberOfGuests}
            onChange={handleChange}
            inputMode="numeric"
          />
        </div>
        <div className="input-field mb-8">
          <input
            type="text"
            name="organizers"
            placeholder="Организаторы"
            value={formData.organizers}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button-submit mt-12">
          Далее
        </button>
      </form>
    </div>
  );
};

export default Planner;