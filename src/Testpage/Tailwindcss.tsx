import React from 'react';
import OnClick from './OnClick';

const Tailwindcss: React.FC = () => {
  return (
    <div className="bg-black/70">
      <p className="w-full p-4 text-3xl text-black border-8 border-gray-300">
        Tailwindcss
      </p>
      <p className="italic text-gray-500 line-clamp-3 border border-gray-300 p-2">
        Test
      </p>
      <OnClick />
    </div>
  );
};

export default Tailwindcss;
