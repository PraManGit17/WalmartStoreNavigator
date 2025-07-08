import React from 'react'
import Select from 'react-select';
import { locators } from '../jsonfiles/locators'
import { useRoute } from '../context/RouteContext';

const options = locators.map(loc => (
  {
    value: loc.name,
    label: loc.name
  }
));


const RouteSelector = () => {

  const { selectedSection, AddSection, clearRoute } = useRoute();

  const handleSelect = (option) => {
    AddSection(option.value)
  }

  console.log(selectedSection);
  return (

    <div className='p-4'>
      <div>
        <Select
          options={options}
          onChange={handleSelect}
          placeholder="Add Section"
          className='w-64'
        />
      </div>

      <div>
        <div className='text-sm text-gray-500'>
          {selectedSection && (
            selectedSection.join('->')
          )}
        </div>
      </div>
    </div>
  )
}

export default RouteSelector
