import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {FaPenAlt,FaTrashAlt } from "react-icons/fa"

const PostPage = ({posts,handledelete}) => {
  const {id}=useParams();
  const post=posts.find(post=>(post.id).toString()===id)
  return (
<main className='PostPage'>
  <article className='post'>
    {post && 
    <>
      <h2>{post.title}</h2>
      <p className='postDate'>{post.datetime}</p>
      <p className='postBody'>{post.body}</p>

     <Link to={`/edit/${post.id}`}>
     <button className='editpost' ><FaPenAlt  role="button"/></button></Link>

      <button className="deletepost" onClick={()=>handledelete(post.id)}><FaTrashAlt  role="button"  /></button>
    </>
    }
    {!post &&
    <>
<h2>post not found</h2>
<p>Well,that's dissapponting.</p>
<p><Link to="/">visit to Home</Link></p>
    </>
    }
  </article>
</main>
  )
}

export default PostPage