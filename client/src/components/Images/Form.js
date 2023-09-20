import React, { useState } from 'react'
import Button from '@mui/material/Button'
import {createImage} from '../../api'
const Form = () => {
    const [imageData,setImageData] = useState({image:''});
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('image',imageData.image);
        createImage(await data)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  return (
    <div>
    <form autoComplete="off" onSubmit={handleSubmit} noValidate>
    <input type='file' defaultValue={imageData.image} onChange={(e) => setImageData({ ...imageData, image: e.target.files[0] })} accept='image/*' />
    <Button fullWidth variant="contained" color="primary" type="submit">Submit</Button>
    </form>
    </div>
  )
}

export default Form
