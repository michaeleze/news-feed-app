"use client";
import React, { useCallback, useState } from 'react';
import { categories, sources } from '@/mock';
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('@/components/Select/Select'))

const DatePicker = dynamic(() => import('@/components/DatePicker/DatePicker'))

const Filters: React.FC = () => {
  // TODO Replace useState with a context API
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedItem, setSelectedItem] = useState<{ [x: string]: string }>({});

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem({ [event.target.name]: event.target.value });
  }, []);

  const SELECTOR_ATTR = [
    { label: 'Category', name: 'category', options: categories },
    { label: 'Source', name: 'source', options: sources },
  ]

  return (
    <div className="flex md:flex-row flex-col gap-6">
      <DatePicker datePicker={{ label: 'Date', handleDateChange, selectedDate }} />
      {SELECTOR_ATTR.map((selector, index) => (
        <Select
          key={index}
          select={{
            selectLabel: selector.label,
            name: selector.name,
            handleChange,
            options: selector.options,
            selectedItem: selectedItem[selector.name]
          }}
        />
      ))
      }
    </div>
  );
};

export default Filters;
