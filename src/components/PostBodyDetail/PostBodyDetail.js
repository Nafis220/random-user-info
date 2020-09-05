import React from 'react';

const PostBodyDetail = (props) => {
    const {body,name,email } = props.body;
    
    return (
        <div className = "container jumbotron jumbotron-fluid">
            <h3> Name :{name}</h3>
            <h4>Post : {body}</h4>
            <h5>Email = {email}</h5>
            
        </div>
    );
};

export default PostBodyDetail;