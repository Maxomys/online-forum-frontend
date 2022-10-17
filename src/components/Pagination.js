import React, { useEffect } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'react-router-dom'

function Pagination({ page, totalPages }) {

  const [searchParams, setSearchParams] = useSearchParams()

  function selectPage(page) {
    setSearchParams(prev => {
      prev.set('page', page)
      return prev
    })
  }

  return (
    <nav className='isolate inline-flex -space-x-px gap-0.5 rounded-md shadow-sm' aria-label='Pagination'>
      {page > 1 &&
        <div
          className='relative inline-flex items-center rounded-sm border-2 border-red-900 bg-white px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:z-20 cursor-pointer'>
          <span className='sr-only'>Previous</span>
          <ChevronLeftIcon className='h-5 w-5' aria-hidden='true'/>
        </div>
      }

      {Array.from(Array(totalPages + 1)).map((p, i) => {
        if (i + 1 === page) {
          //active
          return (
            <div key={i} aria-current='page'
                 className='relative z-10 inline-flex items-center border-2 border-red-900 bg-gray-300 px-4 py-2 text-sm font-medium text-black focus:z-20'>
              {i + 1}
            </div>
          )
        }
        //default
        return (
          <div key={i} aria-current='page' onClick={() => selectPage(i + 1)}
               className='relative z-10 inline-flex items-center border-2 bg-white border-gray-300 text-gray-500 hover:bg-gray-200 px-4 py-2 text-sm font-medium text-black focus:z-20 cursor-pointer'>
            {i + 1}
          </div>
        )
      })}

      {page < totalPages &&
        <div
          className='relative inline-flex items-center rounded-sm border-2 border-red-900 bg-white px-2 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:z-20 cursor-pointer'>
          <span className='sr-only'>Next</span>
          <ChevronRightIcon className='h-5 w-5' aria-hidden='true'/>
        </div>
      }
    </nav>
  )
}

export default Pagination