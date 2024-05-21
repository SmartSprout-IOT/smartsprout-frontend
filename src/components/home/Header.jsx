import React from 'react'

const Header = () => {

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex justify-between items-center h-12 w-full mx-auto px-8">
        <h1 className="text-3xl font-bold text-[#04BF8A]">
          <a href="/home">SmartSprout</a>
        </h1>
      </div>
    </div>
  );
};

export default Header;
