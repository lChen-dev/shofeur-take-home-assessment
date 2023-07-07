import React from 'react';
import Image from 'next/image';

import CompanyLogo from '@/../public/assets/images/logo.png';

export default function Header() {
  return (
    <header className='transparent opacity-70 sticky top-0 z-50 flex h-24 items-center bg-black w-full px-16'>
      <div className='layout flex h-14 items-center justify-between'>
        <Image src={CompanyLogo} alt='Shofuer Logo' />
      </div>
    </header>
  );
}
