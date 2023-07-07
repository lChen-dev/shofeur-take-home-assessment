'use client';

import React, { ReactNode } from 'react';

interface FilterItemWrapperProps {
  label?: string;
  children?: ReactNode;
}

const FilterItemWrapper = ({ label, children }: FilterItemWrapperProps) => {
  return (
    <div className='flex flex-col w-full p-5'>
      <h6 className='mb-2 text-blue-gray-600'>{label}</h6>
      {children}
    </div>
  );
};

export default FilterItemWrapper;