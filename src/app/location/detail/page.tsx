'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import { productList } from '@/config';

interface ICarInfo {
  id: string | null
  name: string
  pricePerHr: string
  pricePerMi?: string
  rate: number
  review: number
}

const Detail = () => {
  const searchParams = useSearchParams();
  const [current, setCurrent] = useState({} as ICarInfo);

  useEffect(() => {
    const thisId = searchParams.get('id');
    if (thisId !== null) {
      setCurrent({
        id: thisId,
        name: productList[parseInt(thisId) - 1].name,
        pricePerHr: productList[parseInt(thisId) - 1].pricePerHr,
        pricePerMi: productList[parseInt(thisId) - 1].pricePerMi?`\$${productList[parseInt(thisId)-1].pricePerMi}`:'Unassigned',
        rate: productList[parseInt(thisId) - 1].rate,
        review: productList[parseInt(thisId) - 1].review
      });
    }
  }, [searchParams]);

  return (<div className='flex w-full h-screen flex-col bg-[url(/assets/images/foreground.webp)] bg-cover'>
    <div className='p-7 w-full flex items-center justify-center'>
      <Link
        href={{
          pathname: '/location',
          query: { place: searchParams.get('place') }
        }}>
        <Button variant="gradient" className="flex items-center mt-8">
          <ArrowLongLeftIcon strokeWidth={2} className="h-5 w-5" />
            Go back to Location Page
        </Button>
      </Link>
    </div>
    <div className='flex-1 w-full p-28 bg-gray-900 opacity-80 text-gray-50'>
      <h1 className='font-extrabold text-6xl'>Here&apos;s the information of item {current.id}</h1>
      <dl className="text-pink-600 max-w-md divide-y divide-gray-200 dark:text-white dark:divide-gray-700 mt-4">
        <div className="flex flex-col pb-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Name</dt>
          <dd className="text-lg font-semibold">{current.name}</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Price Per Hr</dt>
          <dd className="text-lg font-semibold">${current.pricePerHr}</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Price Per Mi</dt>
          <dd className="text-lg font-semibold">{current.pricePerMi}</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Rate</dt>
          <dd className="text-lg font-semibold">{current.rate}</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Review</dt>
          <dd className="text-lg font-semibold">{current.review}</dd>
        </div>
      </dl>
    </div>
    <div className='w-full flex items-center justify-center p-2'>
      <Button variant="gradient" onClick={() => { window.alert('Please contact with Shofeur!'); }}>
      Take order!
      </Button>
    </div>
  </div>);
};

export default Detail;