import React, { useState, useEffect } from 'react';


const CommentDetail = (props) => {
    
    const {body,name } = props.comment;
    const [photo,setPhoto] = useState([]);
    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => setPhoto(data.results))
    },[])
   

    return (
        <div className='container jumbotron jumbotron-fluid '>
            <div className='d-flex'>
                <div>
            {
                photo.map(result => <img className ='rounded-circle w-25' src={result.picture.large} alt=""/> )
            }
            </div>
            <h4 className> {name}</h4>
            </div>
            <div>
            
            <p className ='text-secondary'> {body}</p>
            </div>
        
           
        </div>
    );
};

export default CommentDetail;