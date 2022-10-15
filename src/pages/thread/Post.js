import React from 'react'
import { UserIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'

function Post({ post }) {


  return (
    <>
      <div key={post.id} className='grid md:grid-cols-4 bg-slate-50 md:max-w-4xl justify-items-center p-3 border-2 border-red-900 rounded-sm'>
        <div className='flex md:col-span-1 md:flex-col pt-3 justify-start items-center'>
          <UserIcon className='w-14'/>
          <p className='text-lg'>{post.author.username}</p>
          <p className='text-sm'>{post.author.about}</p>
          <p className='text-sm'>69 likes</p>
        </div>
        <div className='flex md:col-span-3 md:flex-col md:w-full justify-between md:max-w-xl'>
          <p className='text-left mb-4'>
            {post.contents}
          </p>
          <div className='flex md:flex-row justify-between'>
            <p className='text-sm text-gray-600'>At: 29 Jan 1979 12:32</p>
            <div className='flex gap-3'>
              <p className='text-sm'>{post.likes?.length}</p>
              <HandThumbUpIcon className=' h-5'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post