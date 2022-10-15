import React, { useEffect, useState } from 'react'
import Post from './Post'
import PostService from '../../api/PostService'
import { useParams } from 'react-router-dom'


function Thread(props) {

  const params = useParams()

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
      <div className='flex flex-col items-center mt-20'>
        {posts.map(post => (
          <Post post={post}/>
        ))}
      </div>
    </>
  )
}

export default Thread
