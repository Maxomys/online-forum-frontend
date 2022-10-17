import React, { useEffect, useState } from 'react'
import Post from './Post'
import PostService from '../../api/PostService'
import { useParams, useSearchParams } from 'react-router-dom'
import Pagination from '../../components/Pagination'


function Thread(props) {

  const params = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const page = await PostService.getPostsPageByThreadId(params.threadId)
      page.docs.forEach(d => {
        console.log(d)
      })
      setPosts(page.docs)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <div className='flex flex-col items-center px-1 max-w-6xl mx-auto divide-solid gap-0.5'>
        {posts.map(post => (
          <Post key={post.id} post={post}/>
        ))}
        <Pagination totalPages={6} page={2}/>
      </div>
    </>
  )
}

export default Thread
