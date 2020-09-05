import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostBodyDetail from '../PostBodyDetail/PostBodyDetail';

const PostBody = () => {
        let {id} = useParams () ;
        const [body ,setBody ] = useState([]);
        useEffect (()=> {
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
            fetch(url)
          .then(res => res.json())
          .then(data => setBody(data))
        },[])
    return (
        
           <div>
               <h3>Body</h3>
               {
       body.map(body => <PostBodyDetail body={body} ></PostBodyDetail> )    
            
        }  
        </div>
    );
};

export default PostBody;