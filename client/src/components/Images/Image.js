import React, { useEffect, useState } from 'react'
import Form from './Form'
import { Grid } from '@mui/material'
import * as api from '../../api';

const Image = () => {

  const [images,setImages] = useState([]);
  useEffect(()=>{
    const getImages = async() =>{
      let response = await api.getImage();
      setImages(response.data)
    }
    getImages();
  },[])

  return (
    <Grid container spacing={1}>
        <Grid container spacing={1} xs={12} xl={12} md={12} lg={12} sm={12}>
            <Form />  
        </Grid>
        <Grid container spacing={1} xs={12} xl={12} md={12} lg={12} sm={12}>
          {!images ? <div>no images to show</div> : (
            images.map((image)=>(
              <img src={`/uploads/image`} alt='image' width='200px'  />
            ))
          )}
        </Grid>
      </Grid>
  )
}

export default Image
