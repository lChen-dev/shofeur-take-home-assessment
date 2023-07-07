'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface ICardProps {
  id: number
  name: string
  imageUrl: string
  pricePerHr: string
  pricePerMi?: string
  rank: number
  review: number
}

const Card: React.FC<ICardProps> = ({ id, name, imageUrl, pricePerHr, pricePerMi, rank, review }) => {
  const params = useSearchParams();
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link
        href={{
          pathname: '/location/detail',
          query: { 
            place: params.get('place'),
            id: id
          }
        }}>
        <Image className="p-8 rounded-t-lg" src={imageUrl} alt="product image" />
      </Link>
      <div className="px-5 pb-5">
        <Link
          href={{
            pathname: '/location/detail',
            query: { 
              place: params.get('place'),
              id: id
            }
          }}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          {review}<span className='ml-1'>reviews </span>
          {review?
            <>{ [...Array(Math.floor(rank))].map((_, index) => <svg key={`${index}`} aria-hidden="true" className="w-5 h-5 text-orange-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Upvoted</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>) }
              { [...Array(5 - Math.floor(rank))].map((_, index) => <svg key={`${index}`} aria-hidden="true" className="w-5 h-5 text-grey-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Downvoted</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>) }:
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rank}</span>
            </>:
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">New</span>
          }
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{pricePerMi?`\$${pricePerHr}/hr or \$${pricePerMi}/mi`:`\$${pricePerHr}/hr`}</span>
          <Link
            href={{
              pathname: '/location/detail',
              query: { 
                place: params.get('place'),
                id: id
              }
            }}
          >
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Go in</button>
          </Link>
        </div>
      </div>
    </div>
  ); };

export default Card;