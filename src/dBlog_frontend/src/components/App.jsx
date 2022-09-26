import React, { useEffect, useState } from "react";
import Header from "./Header";
import Createarea from "./Createarea";
import Blog from "../components/Blog";
import { dBlog_backend } from "../../../declarations/dBlog_backend"

function App() {
  const [blogs, setBlogs] = useState([]);

  //adding the blog//
  function addBlog(newBlog) {
    // console.log(blog);
    setBlogs((prevBlogs) => {
      //creating the blog at the backend 
      dBlog_backend.createBlog(newBlog.title, newBlog.content, newBlog.writer)
      return [newBlog, ...prevBlogs];
    });
  }

  // triggers the function inside it, whenever site is rendered

  useEffect(()=>{
    console.log("Use effect works");
    fetchData();
  }, []);                       //empty array ensures that useEffect is triggered only once.


  //creating a function fetchData to fetch the data from backend, everytime app refreshes
  
  async function fetchData(){
    //creating a blogArray, taking value from readBlog(), update blogs by setting blogs to blogArray
    const blogArray = await dBlog_backend.readBlogs();
    setBlogs(blogArray);
  }

  function deleteBlog(id) {
    dBlog_backend.removeBlog(id);
    setBlogs((prevBlogs) => {
      return prevBlogs.filter((blogItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Createarea onAdd={addBlog} />
      {blogs.map((blogItem, index) => {
        return (
          <Blog
            key={index}
            id={index}
            title={blogItem.title}
            content={blogItem.content}
            writer={blogItem.writer}
            onDelete={deleteBlog}
          />
        );
      })}
    </div>
  );
}

export default App;
