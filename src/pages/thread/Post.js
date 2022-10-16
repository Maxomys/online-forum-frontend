import React from 'react'
import { UserIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

function Post({ post }) {


  return (
    <>
      <div className='flex flex-col md:grid md:grid-cols-4 bg-slate-50  w-full justify-items-center p-3 border-2 border-red-900 rounded-sm'>
        <div className='flex flex-row justify-around md:col-span-1 md:flex-col pt-3 md:justify-start items-center mb-6 md:mb-0'>
          <div className='flex flex-col items-end'>
            <UserIcon className='w-14'/>
            <p className='text-lg'>{post.author.username}</p>
          </div>
          <div className='flex flex-col items-start'>
            <p className='text-sm'>{post.author.about}</p>
            <p className='text-sm'>69 likes</p>
          </div>
        </div>
        <div className='flex flex-col justify-between md:col-span-3 md:flex-col md:min-w-full md:max-w-xl'>
          <p className='text-left mb-4'>
            {post.contents}
          </p>
          <div className='flex md:flex-row justify-between'>
            <p className='text-sm text-gray-600'>{post.createdAt}</p>
            <div className='flex gap-3'>
              <p className='text-sm cursor-pointer'>{post.likes?.length}</p>
              <HandThumbUpIcon className='h-5 cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post