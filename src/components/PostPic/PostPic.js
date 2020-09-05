import React, { useEffect, useState } from 'react';
const PostPic = () => {
    const [picture,setPicture] = useState([]);
      useEffect (()=>{
     fetch('https://randomuser.me/api/?results=1')
     .then(res => res.json())
     .then(data => setPicture(data.results))
 },[])  
 
    return (
        <div>{ 
          picture.map(pic => <img src={pic.picture.large} alt=""/> )
            }
            
        </div>
    );
};

export default PostPic;