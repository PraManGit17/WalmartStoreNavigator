import React from 'react';
import Select from 'react-select';
import { locators } from '../jsonfiles/locators';
import { useRoute } from '../context/RouteContext';

const options = locators.map(loc => ({
  value: loc.name,
  label: loc.name
}));

const RouteSelector = () => {
  const {
    selectedSection,
    AddSection,
    clearRoute,
    removeLatestSection
  } = useRoute();

  const handleSelect = (option) => {
    AddSection(option.value);
  };

  return (
    <div className='p-4 space-y-4'>
      <div>
        <Select
          options={options}
          onChange={handleSelect}
          placeholder="Add Section"
          className='w-64'
        />
      </div>

      <div className='text-sm text-gray-600'>
        {selectedSection.length > 0 ? selectedSection.join(' → ') : 'No section selected'}
      </div>

      <div className='space-x-2 flex flex-col gap-2'>
        <button
          onClick={() => removeLatestSection()}
          className='px-3 py-1 w-full bg-yellow-500 text-white rounded hover:cursor-pointer'
        >
          Remove Latest
        </button>

        <button
          onClick={clearRoute}
          className='px-3 py-1 w-full bg-red-500 text-white rounded hover:cursor-pointer'
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default RouteSelector;
