import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {createPost} from '../../api/index'
import useStyle from './Style'

const Form = () => {
    const classes = useStyle();
    const [post,setPost] = useState({title:'',content:''});
    const clear = () => {
        setPost({title:'',content:''})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const postData = {
            title:post.title,
            content:post.content
        }

        if(!post.title || !post.content){
            console.log('Filled The Empty Boxes!')
        }else{
            createPost(postData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                if (error.response) {
                console.log(error.response);
                console.log("server responded");
                } else if (error.request) {
                console.log("network error");
                } else {
                console.log(error);
                }
            });
        }
        clear();
        window.location.reload(false);
    }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit} noValidate>
      <TextField style={{marginBottom:'5px'}} className={classes.TextField} fullWidth label="title" value={post.title} name='title' type='text' onChange={(e) => setPost({...post,title:e.target.value})} />
      <TextField multiline rows={3} style={{marginBottom:'5px'}} className={classes.TextField} fullWidth label="content" value={post.content} name='content' type='text' onChange={(e) => setPost({...post,content:e.target.value})} />
      <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Form
