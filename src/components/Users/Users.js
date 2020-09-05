import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import PostPic from '../PostPic/PostPic';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
//  console.log(props.pic) 
 const classes = useStyles();
 const {title,body,id} = props.post
 const [picture,setPicture] = useState([]);
 useEffect(()=>{
     fetch('https://randomuser.me/api/?results=100')
     .then(res => res.json())
     .then(data => setPicture(data.results))
 },[])  
    // const {name,picture,gender,dob,phone} = props.user
    // console.log(props.user)
  return (
    <div style={{ padding: 20 }}>
      <Grid container
      direction="row"
      justify="center"
      alignItems="center">
    <Card  className={classes.root}>
    {/* <PostPic></PostPic> */}
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p"> 
       <Link to ={`/body/detail/${id}`}>   
          <h2>Posts No : {id}</h2>
          <h4>Title :{title}</h4>
          <h3>Body :{body}</h3>
        </Link> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
    <Link to = {`/post/${id}`}>  <Button variant="contained" color="primary" >
        Comments
      </Button></Link>
      </CardActions>
    </Card>
    </Grid>
    
    </div>);
}

























// import React from 'react';
// import Box from '@material-ui/core/Box'
// import Button from '@material-ui/core/BUtton'
// import Cart from '../cart';
// const Users = (props) => {
//     console.log(props.user)
//     const {name} = props.user
//     return (
//         <div>
//             <h2> User = {name.first } <span>{name.last}</span></h2>
//             <Button variant="contained" color="primary" href="#contained-buttons">See More</Button>
//             <Cart></Cart>
//         </div>
        
//     );
// };

// export default Users;