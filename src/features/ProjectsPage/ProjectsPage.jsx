import React, { useState } from 'react';
import GridView from './GridView';
import ListView from './ListView';

function ProjectsPage() {
  const [view, setView] = useState('grid');

  const projects = [
    {
      image: '../../../media/bg-images/bg-image-lg-e.jpeg',
      title: 'בית במושב ',
      place: 'מושבת כנרת',
      year: '2015',
    },
    {
      image: '../../../media/bg-images/bg-image.jpg',
      title: 'בית במושב  ',
      place: 'מגדל',
      year: '2020',
    },
    {
      image: '../../../media/bg-images/bg-image2.jpeg',
      title: 'מלון גומא, ישרוטל',
      place: 'כנרת',
      year: '2019',
    },
    {
      image: '../../../media/bg-images/bg-image3.jpeg',
      title: 'שערי המושבה',
      place: 'ראש פינה',
      year: '2016',
    },
  ];

  return (
    <div
      className="relative mt-32 min-h-screen w-screen gap-8 border-b-2 border-stone-300 px-8 pb-12 sm:mt-48 sm:px-32"
      dir="rtl"
    >
      <h2 className="pb-5 text-4xl font-bold">הפרוייקטים שלנו</h2>

      <div className="mb-12 flex items-center justify-end gap-8">
        <div className="flex items-center sm:text-lg">
          <span className="font-bold">סוג פרוייקט</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#EAC452"
          >
            <path d="M480-360 280-559.33h400L480-360Z" />
          </svg>
        </div>

        {/* View Toggle */}
        <div className="flex items-center">
          <button
            onClick={() => setView('grid')}
            className={`p-2 transition ${
              view === 'grid' ? 'text-yellow-500' : 'text-gray-500'
            }`}
          >
            {/* Grid Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z" />
            </svg>
          </button>

          <button
            onClick={() => setView('list')}
            className={`p-2 transition ${
              view === 'list' ? 'text-yellow-500' : 'text-gray-500'
            }`}
          >
            {/* List Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {view === 'grid' ? (
        <GridView projects={projects} />
      ) : (
        <ListView projects={projects} />
      )}
    </div>
  );
}

export default ProjectsPage;
