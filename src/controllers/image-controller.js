const express = require('express');
const router = express.Router()
const imageCollection = require('../persistence/image-collection')

router.get('',getAllImages);
router.get('/:imageObjId',getImageById);
router.post('/addImages', addImages);
router.put('/:updateImageById', updateImageById)



function getAllImages(req, res, next){
    return imageCollection.find().then((result) => {
        res.send(result);
        
    }).catch((err) => {
        return next(err)
    })
}


function addImages(req,res,next){
    const { body } = req
    
    const images = new imageCollection(body)

    return images.save().then((images) => {
        res.send({"status":"images Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getImageById(req, res, next){
    const {params:{ imageObjId }} = req
    return imageCollection.findById(imageObjId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function updateImageById(req,res,next){
    const { params: {updateImageById}} = req
    const imageObject = req.body
    return imageCollection.findByIdAndUpdate(updateImageById, imageObject, {new: true}).then((result)=>{
        res.send(result)
    }).catch(err=>{
        return err
    })
}

module.exports = router

