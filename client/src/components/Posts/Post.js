import React, { useEffect, useState } from 'react';
import * as api from '../../api';
import Grid from '@mui/material/Grid'
import Form from './Form';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


const Posts = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const fetchPost = async() => {
            let response = await api.getPost();
            setPosts(response.data)
        }
        fetchPost();
    },[])

    const deletePost = (id) => {
        api.deletePost(`${id}`);
        setPosts(posts.filter((post)=>{
            return post.id !== id;
        }))
        window.location.reload(false)
    }
  return (
      <Grid container spacing={1}>
        <Grid container spacing={1} xs={12} xl={12} md={12} lg={12} sm={12}>
            <Form />  
        </Grid>
        <Grid container spacing={1} xs={12} xl={12} md={12} lg={12} sm={12}>
        {!posts ? <div>No Posts To Show </div> : (
            posts.map((post)=>(
                <Grid container spacing={1} xs={12} xl={12} md={12} lg={12} sm={12}>
                <Typography variant="h6" width='100%' textAlign='center' marginTop='20px' color="initial">{post.title}</Typography>
                <Typography variant="body1" width='100%' padding='2%' marginTop='15px' color="initial">{post.content}</Typography>
                <Button variant="outlined" color="error" fullWidth onClick={() => deletePost(post._id)}>Delete Post</Button>
                </Grid>
            ))
        )}
        </Grid>
      </Grid>
  )
}

export default Posts
