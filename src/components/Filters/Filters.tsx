"use client";
import React, { useCallback, useState } from 'react';
import { categories, sources } from '@/mock';
import dynamic from 'next/dynamic';
import { FiltersProps } from '@/types/';

const Select = dynamic(() => import('@/components/Select/Select'))

const DatePicker = dynamic(() => import('@/components/DatePicker/DatePicker'))

const Filters: React.FC<FiltersProps> = ({
  selectedDate,
  handlefilterByDate,
  handleChange,
  selectedItem,
}) => {

  const SELECTOR_ATTR = [
    { label: 'Category', name: 'category', options: categories },
    { label: 'Source', name: 'source', options: sources },
  ]

  const datePickerAttr = { label: 'Date', handlefilterByDate, selectedDate }

  return (
    <div className="flex md:flex-row flex-col gap-6">
      <DatePicker {...datePickerAttr} />
      {SELECTOR_ATTR.map((selector, index) => {
        const selectAttr = {
          selectLabel: selector.label,
          name: selector.name,
          handleChange,
          options: selector.options,
          selectedItem
        }
        return (
          <Select
            key={index}
            {...selectAttr}
          />
        )
      })
      }
    </div>
  );
};

export default Filters;
