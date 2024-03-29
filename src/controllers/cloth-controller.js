const express = require('express');
const router = express.Router()
const clothCollection = require('../persistence/cloth-collection')
const clothLogics = require('../business-logics/cloth-logics')


router.post('/', createcloth)
router.get('/', getAllCloths)
router.get('/search', searchClothByKeyWord)
router.get('/:clothId', getClothById)
router.get('/category/:categoryId', getClothByCategory)
router.delete('/:clothId', deleteCloth)
router.put('/:clothId', updateClothById)



function createcloth(req,res,next){
    const { body } = req
    const cloth = new clothCollection(body)

    return cloth.save().then((result) => {
        res.send({"status":"Cloth Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getAllCloths(req, res, next){
      return clothLogics.getAllcloths().then((result) => {
        res.send(JSON.stringify(result));
        next();
    }).catch((err) => {
        
        return next(err)
    })
}

function getClothById(req, res, next){
    const {params:{ clothId }} = req
    return clothCollection.findById(clothId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}

function updateClothById(req,res,next){
    const { params: {clothId}} = req
    const clothObject = req.body
    return clothCollection.findByIdAndUpdate(clothId, clothObject, {new: true}).then((result)=>{
        res.send(result)
    })
}

function searchClothByKeyWord(req,res,next){
    const { query : {keyword}} = req
    console.log("ress", req)
    const search = { $text: { $search: keyword } };
    return clothCollection.find(search).then((result) => {
        res.send(result);
    }).catch((err) => {
        return next(err)
    })
}

function getClothByCategory(req, res, next){    
    const {params:{ categoryId }} = req
    return clothCollection.find({categoryId: categoryId}).then((result) => {
        res.send(result);
    }).catch((err) => {
        return next(err)
    })
}

function deleteCloth(req, res, next){
    const {params:{ clothId }} = req
    return clothCollection.remove({_id:clothId}).then((result) => {
        res.send({"status":"Cloth Deleted Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}


module.exports = router