import React, { useState, useEffect } from 'react';
import Users from '../Users/Users';

    const Home = () => {
        
    
 const [post,setPost] = useState([]) 
 useEffect( ()=>{
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json())
   .then(data => setPost(data))     
   },[])
   
    return (
        <div>
            <h2 className ='text-secondary'>List Of 100 Posts </h2>
    {
          post.map(post =><Users key ={post.id} post = {post}></Users>)
        
    }
    
        </div>
    );
};

export default Home;