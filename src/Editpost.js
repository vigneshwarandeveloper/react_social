import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpost = ({posts,edittitle,editbody,setedittitle,seteditbody,handleEdit}) => {
    const{id}=useParams()
    const post=posts.find(post=>(post.id).toString()===id)
    useEffect(()=>{
        if(post){
            setedittitle(post.title)
            seteditbody(post.body)
        }
    },[post,seteditbody,setedittitle])
    
  return (
   <main className='NewPost'>
    {edittitle &&
    <>
        <h2>Edit Your Post</h2>
        <form className='newPostForm' onSubmit={(e)=>{e.preventDefault()}}>
        <input 
        id="edittitle"
            required
            type='text'
            placeholder='you can edit your title...'
            value={edittitle}
            onChange={(e)=>setedittitle(e.target.value)}
        />
        <textarea 
        id="editbody"
             required
            type='text'
            placeholder='you can edit your title...'
            value={editbody}
            onChange={(e)=>seteditbody(e.target.value)}
        />
        <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
        
        </form>
    </>
    }
    {!edittitle &&
    <>
        <h2>Edit Your Post</h2>
        <form className='newPostForm' onSubmit={(e)=>{e.preventDefault()}}>
        <input 
        id="edittitle"
            required
            type='text'
            placeholder='you can edit your title...'
            value={edittitle}
            onChange={(e)=>setedittitle(e.target.value)}
        />
        <textarea 
        id="editbody"
             required
            type='text'
            placeholder='you can edit your title...'
            value={editbody}
            onChange={(e)=>seteditbody(e.target.value)}
        />
        <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
        </form>
        </>
    }
   </main>
  )
}

export default Editpost