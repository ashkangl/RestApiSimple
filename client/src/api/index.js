import axios from 'axios';
export const API = axios.create({baseURL:"http://localhost:8000"});
 
export const getPost = () =>  API.get('/api/getPost');
export const getImage = () =>  API.get('/api/getImage');
export const createPost = (newPost) =>  API.post('/api/createPost',newPost);
export const createImage = (newImage) =>  API.post('/api/createImage',newImage);
export const deletePost = (id) =>  API.delete(`/api/deletePost/${id}`);




