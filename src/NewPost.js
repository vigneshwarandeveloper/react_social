import React from 'react'

const NewPost = ({handlesubmit,posttitle,postbody,setposttitle,setpostbody}) => {
  return (
    <main className='NewPost'>
    <h1>New Post</h1>
    <form className='newPostForm' onSubmit={handlesubmit}>
    <input 
    id="posttitle"
    required
    value={posttitle}
    placeholder='Enter your Title...'
    type='text'
    onChange={(e)=>setposttitle(e.target.value)}
    />
    <textarea 
    id="postbody"
    required
    value={postbody}
    placeholder='Enter your Body...'
    type='text'
    onChange={(e)=>setpostbody(e.target.value)}
    />
    <button type='submit'>Submit</button>
    </form>
    </main>
  )
}

export default NewPost