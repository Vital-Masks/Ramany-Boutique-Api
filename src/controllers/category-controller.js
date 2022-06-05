const express = require('express');
const router = express.Router()
const mainCategoryCollection = require('../persistence/mainCategory-collection')
const subCategoryCollection = require('../persistence/subCategory-collection')


router.post('/mainCategory', createMainCategory)
router.get('/mainCategory', getAllMainCategorys)
router.get('/:mainCategoryId', getMainCategoryById)
router.delete('/:mainCategoryId', deleteMainCategory)

router.post('/subCategory', createSubCategory)
router.get('/subCategory', getAllSubCategorys)
router.get('/:subCategoryId', getSubCategoryById)
router.delete('/:subCategoryId', deleteSubCategory)



function createMainCategory(req,res,next){
    const { body } = req
    
    const mainCategory = new mainCategoryCollection(body)

    return mainCategory.save().then((result) => {
        res.send({"status":"MainCategory Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getAllMainCategorys(req, res, next){
    return mainCategoryCollection.find().then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getMainCategoryById(req, res, next){
    const {params:{ mainCategoryId }} = req
    return mainCategoryCollection.findById(mainCategoryId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function deleteMainCategory(req, res, next){
    const {params:{ mainCategoryId }} = req
    return mainCategoryCollection.remove({_id:mainCategoryId}).then((result) => {
        res.send({"status":"MainCategory Deleted Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function createSubCategory(req,res,next){
    const { body } = req
    
    const subCategory = new subCategoryCollection(body)

    return subCategory.save().then((result) => {
        res.send({"status":"SubCategory Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getAllSubCategorys(req, res, next){
    return subCategoryCollection.find().then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getSubCategoryById(req, res, next){
    const {params:{ subCategoryId }} = req
    return subCategoryCollection.findById(subCategoryId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function deleteSubCategory(req, res, next){
    const {params:{ subCategoryId }} = req
    return subCategoryCollection.remove({_id:subCategoryId}).then((result) => {
        res.send({"status":"SubCategory Deleted Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}


module.exports = router