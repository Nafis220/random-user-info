import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentDetail from './COmmentDetail/CommentDetail';


const Comment = () => {
       let {id} = useParams() ;
    const [comment ,setComment ] = useState([]);
   useEffect(()=> {
       const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
       fetch(url)
     .then(res => res.json())
     .then(data => setComment(data))
   },[])
      ;
   const [post,setPost] = useState([]) 
 useEffect( ()=>{
   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then(res => res.json())
   .then(data => setPost(data))     
   },[]) 
   
    return (
        <div>
            <h1>Post Detail</h1>
            <div className='container jumbotron jumbotron-fluid'>
            <h5>User ID = {post.userId}</h5>
            <h5> Title Of Post : <br/>{post.title}</h5>
            <h4>Post : <br/>{post.body}</h4>
            </div>
            <h1>Comments Of The Post</h1>
            {
       comment.map (comment => <CommentDetail comment ={comment}></CommentDetail>)    
            
        }
        </div>
    );
};

export default Comment;