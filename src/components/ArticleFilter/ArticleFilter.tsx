"use client";
import React, { useState } from 'react';

const ArticleFilter: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSource, setSelectedSource] = useState('');

  const categories = ['Technology', 'Health', 'Business', 'Entertainment', 'Sports'];
  const sources = ['BBC', 'CNN', 'Reuters', 'The New York Times', 'The Guardian'];

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSource(event.target.value);
  };

  return (
    <div className="flex md:flex-row flex-col gap-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <input type="date" className="input input-bordered" value={selectedDate} onChange={handleDateChange} />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <select className="select select-bordered" value={selectedCategory} onChange={handleCategoryChange}>
          <option disabled selected>Pick a category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Source</span>
        </label>
        <select className="select select-bordered" value={selectedSource} onChange={handleSourceChange}>
          <option disabled selected>Pick a source</option>
          {sources.map((source, index) => (
            <option key={index} value={source}>{source}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ArticleFilter;
