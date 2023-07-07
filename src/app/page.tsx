'use client';

import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';

import './globals.css';
import Header from '@/components/Header';
import { googleApiKey } from '@/config';

const App: React.FC = () => {

  const [value, setValue] = useState(null);

  const handleValueSlected = (currentValue: any) => {
    setValue(currentValue?.label);
  };

  return(<>
    <div className='flex flex-col items-center content-center w-full h-[75vh] bg-[url(/assets/images/foreground.webp)] bg-cover'>
      <Header />
      <div className='flex flex-col items-center justify-center p-8 text-xl lg:text-2xl sm:p-20 sm:w-2/3 w-full'>
        <h2 className="mb-10 text-3xl font-semibold text-center text-[#000080] w-full drop-shadow-lg">Which location service are you looking for?</h2>
        <GooglePlacesAutocomplete
          apiKey={googleApiKey}
          debounce={700}
          selectProps={{
            onChange: handleValueSlected,
            styles: {
              container: (provided: any) => ({
                ...provided,
                width: '100%',
                minWidth: 250,
                cursor: 'pointer'
              }),
              placeholder: (provided: any) => ({
                ...provided,
                color: 'lightgrey'
              })
            }
          }}
        />
        <Link
          href={value?{
            pathname: '/location',
            query: {place: value}
          }: {}}
        >
          <Button variant="gradient" className="flex items-center mt-8">
              Let&rsquo;s go find
            <ArrowLongRightIcon strokeWidth={2} className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  </>);
};

export default App;