'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { Input, Select, Option, Checkbox, Button } from '@material-tailwind/react';
import DatePicker from 'tailwind-datepicker-react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import axios from 'axios';

import FilterItemWrapper from '@/components/FilterItemWrapper';
import { eventTypes, vehicleTypes, photoApiAccessKey, productList } from '@/config';
import ImageSkeleton from '@/components/ImageSkeleton';
import dynamic from 'next/dynamic';
import CardSkeleton from '@/components/CardSkeleton';

const Card = dynamic(
  () => import('@/components/Card'),
  {
    loading: () => <CardSkeleton />
  }
);

const Location = () => {

  const [datePickerIsOpen, setDatePickerIsOpen] = useState(false);
  const [locationImageUrl, setLocationImageUrl] = useState('');  

  const handleDatePickerClose = (state: boolean) => {
    setDatePickerIsOpen(state);
  };

  const searchParams = useSearchParams();

  useEffect(() => {
    const getImage = async () => {
      const locationName = searchParams.get('place')?.split(',').at(0);
      const imageResponse = await axios.get('https://api.unsplash.com/search/photos',
        {
          headers: {
            Authorization: `Client-ID ${photoApiAccessKey}`
          },
          params: {
            query: locationName
          }
        });
      setLocationImageUrl(imageResponse.data.results[0].urls.regular);
    };
    getImage();
  }, []);

  return (
    <div className='flex w-full'>
      <div className='flex flex-col h-full justify-center items-center p-8 bg-blue-gray-50'>
        <Link
          href={{
            pathname: '/'
          }}
        >
          <Button variant="gradient" className="flex items-center mt-8">
            <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" />
            Go back to Search
          </Button>
        </Link>
        <FilterItemWrapper label='Event date'>
          <DatePicker
            show={datePickerIsOpen}
            setShow={handleDatePickerClose}
            options={{
              title: 'Pick up your event\'s date.',
              autoHide: false,
              todayBtn: true,
              clearBtn: true,
              defaultDate: null,
              theme: {
                Input: 'bg-blue-gray-50'
              },
              require: true
            }}
          />
        </FilterItemWrapper>
        <FilterItemWrapper label='Pickup city or airport'>
          <Input disabled size='lg' label='Place name' defaultValue={searchParams.get('place') as string} />
        </FilterItemWrapper>
        <FilterItemWrapper label='Event type'>
          <Select size='lg' label='Select event type'>
            {eventTypes.map((type, index) => <Option key={index}>{type}</Option>)}
          </Select>
        </FilterItemWrapper>
        <FilterItemWrapper label='Vehicle type'>
          <Select size='lg' label='Select vehicle type'>
            {vehicleTypes.map((type, index) => <Option key={index}>{type}</Option>)}
          </Select>
        </FilterItemWrapper>
        <FilterItemWrapper label='Group size'>
          <Input type='number' label='Guests' min={0} />
        </FilterItemWrapper>
        <FilterItemWrapper label='Allow smoking'>
          <Checkbox
            className="rounded-full w-8 h-8 hover:before:opacity-0 hover:scale-105 bg-blue-500/25 border-blue-500/50 transition-all"
          />
        </FilterItemWrapper>
      </div>
      <div className='flex-1 p-8 bg-teal-100'>
        <h1 className='w-full text-4xl font-bold text-center text-yellow-900 drop-shadow-xl'>{searchParams.get('place')}</h1>
        <div className='flex justify-center items-center p-6 w-full'>
          <LazyLoadImage
            className='w-full h-[400px]'
            src={locationImageUrl}
            alt='Photo of this area'
            placeholder={<ImageSkeleton />}
          />
        </div>
        <div className='w-full flex flex-wrap justify-between'>
          {productList.map((car, id) => <Card key={id} id={car.id} name={car.name} imageUrl={car.imageSrc} rank={car.rate} pricePerHr={car.pricePerHr} pricePerMi={car.pricePerMi} review={car.review}/>)}
        </div>
      </div>
    </div>
  );
};

export default Location;