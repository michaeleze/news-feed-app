import { authors, categories, sources } from '@/mock';
import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

const MultiSelect = dynamic(() => import('@/components/MultiSelect/MultiSelect'), {
  loading: () => <p>Loading...</p>
})

const PersonalizeNewsFeedOptions: React.FC = () => {
  // TODO replace useState with a context API
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleOption = useCallback((option: never) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((SelectedOption) => SelectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  }, [selectedOptions]);

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    // Handle the submission logic here
    console.log('Selected Sources:', selectedSources);
  }, []);

  const SELECT_FEED_ATTR = [
    { label: 'Category', name: 'category', options: categories },
    { label: 'Source', name: 'source', options: sources },
    { label: 'Author', name: 'author', options: authors },
  ]

  return (
    <form onSubmit={handleSubmit} className="p-4 w-lg">
      <div className="w-full max-w-xs mx-auto">
        {SELECT_FEED_ATTR.map((attr) => (
          <MultiSelect
            label={attr.label}
            key={attr.label}
            options={attr.options}
            selectedOptions={selectedOptions}
            handleToggleOption={toggleOption}
          />
        ))}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Customize Feed</button>
        </div>
      </div>
    </form>
  );
};

export default PersonalizeNewsFeedOptions;
