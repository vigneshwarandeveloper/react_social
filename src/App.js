import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import NewPost from "./NewPost"
import PostPage from "./PostPage"
import Missing from './Missing';
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Route,Routes, useNavigate } from "react-router-dom";
import api from "./api/posts";
import Editpost from "./Editpost";

function App() {
  const [posts,setposts]=useState([]);
  const [search,setsearch]=useState("") ;
  const [searchResults,setsearchResults]=useState([]);
  const [posttitle,setposttitle]=useState();
  const [postbody,setpostbody]=useState();
  const [edittitle,setedittitle]=useState();
  const [editbody,seteditbody]=useState();
  const navigator=useNavigate();


  useEffect(()=>{
    const fetchposts=async()=>{
      try{
      const response=await api.get("/posts");
      setposts(response.data); 
    }catch(err){
      if(err.response){
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      }else{
        console.log(`Error:${err.message}`);
      }
    }
  }
    fetchposts();
  },[])


useEffect(()=>{
  const filterResults=posts.filter((post)=>
  ((post.body).toLowerCase()).includes(search.toLowerCase())
  ||
  ((post.title).toLowerCase()).includes(search.toLowerCase()));
  setsearchResults(filterResults.reverse());
},[posts,search])


const handlesubmit=async(e)=>{
e.preventDefault();
const id=posts.length?posts[posts.length-1].id+1:1;
const datetime=format(new Date(),'MMMM dd,yyyy pp ');
const newpost={id,title:posttitle,datetime,body:postbody};
const response=await api.post("/posts",newpost);
const allpost=[...posts,response.data];
setposts(allpost);
setposttitle("");
setpostbody("");
navigator("/")
}

const handleEdit=async(id)=>{
  const datetime=format(new Date(),'MMMM dd,yyyy pp ');
  const updatedpost={id,title:edittitle,datetime,body:editbody};
  try{
const response=await api.put(`/posts/${id}`,updatedpost)
setposts(posts.map(post=> post.id===id ?{...response.data}:post));
setedittitle("");
seteditbody("");
navigator("/")
  }catch(err){
    console.log(`Error:${err.message}`);
  }
}

const handledelete=async(id)=>{
  await api.delete(`/posts/${id}`)
const postlists=posts.filter(post=>
  post.id!==id)
  setposts(postlists)
  navigator("/")
}

 
  return (
    <div className="App">
      <Header title={"KICKINSTA"} />
      <Nav 
        search={search}
        setsearch={setsearch}
      />
      <Routes>
      <Route path="/" element={
      <Home posts={searchResults}/>}/>

      <Route path="post">
      <Route index element={
        <NewPost 
          handlesubmit={handlesubmit}
          posttitle={posttitle}
          postbody={postbody}
          setposttitle={setposttitle}
          setpostbody={setpostbody}
        />
      }/>

      <Route path=":id" element={<PostPage
      posts={posts}
      handledelete={handledelete}
       />} />
      </Route>
      <Route path="/edit/:id" element={<Editpost 
        posts={posts} handleEdit={handleEdit} 
        edittitle={edittitle} editbody={editbody}
        setedittitle={setedittitle} seteditbody={seteditbody}
       />} />
     <Route path="/about" element={<About />} />
      <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
