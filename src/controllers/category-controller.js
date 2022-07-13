const express = require('express');
const router = express.Router()
const mainCategoryCollection = require('../persistence/mainCategory-collection')
// const occasionTypeCollection = require('../persistence/occasionType-collection')


router.post('/mainCategory', createMainCategory)
router.get('/mainCategory', getAllMainCategorys)
router.get('/:mainCategoryId', getMainCategoryById)
router.get('/', getCategoryBycategoryType)
router.delete('/:mainCategoryId', deleteMainCategory)
router.put('/:mainCategoryId', updateCategoryById)

// router.post('/occasionType', createOccasionType)
// router.get('/occasionType', getAllOccasionTypes)
// router.get('/:occasionTypeId', getOccasionTypeById)
// router.delete('/:occasionTypeId', deleteOccasionType)



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
function updateCategoryById(req,res,next){
    console.log("rew",req.params, req.body)
    const { params: {mainCategoryId}} = req
    const categoryObject = req.body
    return mainCategoryCollection.findByIdAndUpdate(mainCategoryId, categoryObject).then((result)=>{
        res.send(result)
    })
}
function getCategoryBycategoryType(req, res, next){
    const {query:{ categoryType }} = req
    return mainCategoryCollection.find({categoryType:categoryType}).then((result) => {
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

// function createOccasionType(req,res,next){
//     const { body } = req
    
//     const occasionType = new occasionTypeCollection(body)

//     return occasionType.save().then((result) => {
//         res.send({"status":"occasionType Saved Successfully"});
//         next();
//     }).catch((err) => {
//         return next(err)
//     })
// }

// function getAllOccasionTypes(req, res, next){
//     return occasionTypeCollection.find().then((result) => {
//         res.send(result);
//         next();
//     }).catch((err) => {
//         return next(err)
//     })
// }

// function getOccasionTypeById(req, res, next){
//     const {params:{ occasionTypeId }} = req
//     return occasionTypeCollection.findById(occasionTypeId).then((result) => {
//         res.send(result);
//         next();
//     }).catch((err) => {
//         return next(err)
//     })
// }

// function deleteOccasionType(req, res, next){
//     const {params:{ occasionTypeId }} = req
//     return occasionTypeCollection.remove({_id:occasionTypeId}).then((result) => {
//         res.send({"status":"occasionType Deleted Successfully"});
//         next();
//     }).catch((err) => {
//         return next(err)
//     })
// }


module.exports = router