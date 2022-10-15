import Api from './Api'
import { parseTemplate } from 'url-template'

const POSTS_IN_THREAD_URL = parseTemplate('/threads/{threadId}/posts')
const POST_URL = parseTemplate('/posts/{postId}')
const POSTS_URL = '/posts'

async function getPostsPageByThreadId(threadId) {
  try {
    const res = await Api.get(POSTS_IN_THREAD_URL.expand({ threadId }))
    return res.data
  } catch (err) {
    console.log(err)
  }
}

async function getPostById(postId) {
  try {
  const res = await Api.get(POST_URL.expand({ postId }))
    return res.data
  } catch (err) {
    console.log(err)
  }
}

async function postNewPost(post) {
  try {
    await Api.post(POSTS_URL, post)
  } catch (err) {
    console.log(err)
  }
}

async function deletePostById(postId) {
  try {
    await Api.delete(POSTS_URL)
  } catch (err) {
    console.log(err)
  }
}

export default {
  getPostsPageByThreadId,
  getPostById,
  postNewPost,
  deletePostById
}
