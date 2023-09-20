import express from 'express';
import mongoose from 'mongoose';
import Post from '../models/post.js';
import ImageModel from '../models/image.js';
import upload from '../middleware/Upload.js';

const router = express.Router();

router.get('/getPost',async(req,res)=>{
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }    
})

router.get('/getImage',async(req,res)=>{
    try {
        const img = await ImageModel.find();
        res.status(200).json(img);
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
})

router.post('/createPost',async(req,res)=>{
    const r = req.body;
    var post = new Post(r)
    post.save()
    .then(post => console.log(post))
    .catch(err => console.log(err));
})

router.post('/createImage',upload.any(),async(req,res)=>{
    var post = new ImageModel({
        image:req.files[0].filename
    });
    post.save()
    .then(post => console.log(post))
    .catch(err => console.log(err));
})

router.delete('/deletePost/:id',async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Backlinks With This ID');
    await Post.findByIdAndRemove(id);
    res.json({message:'Post Deleted Succesfully !'});
})

export default router;