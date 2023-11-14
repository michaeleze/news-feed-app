"use client";
import React, { useState } from 'react';
import DatePicker from '../DatePicker/DatePicker';
import Select from '../Select/Select';
import { categories, sources } from '@/mock';

const Filters: React.FC = () => {
  // TODO Replace useState with a context API
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedItem, setSelectedItem] = useState<{[x: string]:string}>({});

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem({[event.target.name]: event.target.value});
  };

  const SELECTOR_ATTR = [
    {label: 'Category', name: 'category', options: categories},
    {label: 'Source', name: 'source', options: sources},
  ]

  return (
    <div className="flex md:flex-row flex-col gap-6">
     <DatePicker label="Date" handleDateChange={handleDateChange} selectedDate={selectedDate} />
     {SELECTOR_ATTR.map((selector, index) => (
       <Select
         key={index}
         selectLabel={selector.label}
         name={selector.name}
         handleChange={handleChange}
         options={selector.options}
         selectedItem={selectedItem[selector.name]}
       />
     ))
     }
    </div>
  );
};

export default Filters;
