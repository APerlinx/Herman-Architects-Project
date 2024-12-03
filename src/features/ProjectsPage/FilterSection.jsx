import React from 'react';

function FilterSection({ showFilters, filter, setFilter }) {
  const buttonStyle = 'px-4 py-2 hover:text-yellow-500 font-bold';

  const filters = [
    { value: 'all', label: 'הכל' },
    { value: 'Residential', label: 'מגורים' },
    { value: 'Commercial', label: 'מסחרי' },
    { value: 'Public', label: 'ציבורי' },
  ];

  return (
    <div
      className={`transition-max-height overflow-hidden duration-700 ${
        showFilters ? 'max-h-96' : 'max-h-0'
      }`}
    >
      <div className="mb-8 flex flex-wrap gap-4 p-4">
        {filters.map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value)}
            className={`${buttonStyle} ${
              filter === item.value
                ? ' text-yellow-500'
                : 'border-stone-300 text-stone-800'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterSection;