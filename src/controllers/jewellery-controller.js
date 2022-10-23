const express = require('express');
const router = express.Router()
const jewelleryCollection = require('../persistence/jewellery-collection')
const jewelleryLogics = require('../business-logics/jewellery-logics')


router.post('/', createjewellery)
router.get('/', getAlljewellerys)
router.get('/:jewelleryId', getjewelleryById)
router.get('/jewelleryCategory/:jewelleryCategoryId', getjewelleryByjewelleryCategoryId)
router.get('/occasionType/:occasionTypeId', getjewelleryByoccasionTypeId)
router.delete('/:jewelleryId', deletejewellery)
router.put('/:jewelleryId', updatejewelleryById)



function createjewellery(req,res,next){
    const { body } = req
    
    const jewellery = new jewelleryCollection(body)

    return jewellery.save().then((result) => {
        res.send({"status":"jewellery Saved Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}

function getAlljewellerys(req, res, next){
      return jewelleryLogics.getAlljewellerys().then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        
        return next(err)
    })
}

function getjewelleryById(req, res, next){
    const {params:{ jewelleryId }} = req
    return jewelleryCollection.findById(jewelleryId).then((result) => {
        res.send(result);
        next();
    }).catch((err) => {
        return next(err)
    })
}
function updatejewelleryById(req,res,next){
    const { params: {jewelleryId}} = req
    const jewelleryObject = req.body
    return jewelleryCollection.findByIdAndUpdate(jewelleryId, jewelleryObject, {new: true}).then((result)=>{
        res.send(result)
    })
}

function getjewelleryByjewelleryCategoryId(req, res, next){  
    console.log("kxbvkxjb")  
    const {params:{ jewelleryCategoryId }} = req
    return jewelleryCollection.find({jewelleryingCategoryId: jewelleryCategoryId }).then((result) => {
        res.send(result);
    }).catch((err) => {
        return next(err)
    })
}

function getjewelleryByoccasionTypeId(req, res, next){  
    console.log("kxbvkxjb")  
    const {params:{ occasionTypeId }} = req
    return jewelleryCollection.find({occasionTypeId: occasionTypeId }).then((result) => {
        res.send(result);
    }).catch((err) => {
        return next(err)
    })
}

function deletejewellery(req, res, next){
    const {params:{ jewelleryId }} = req
    return jewelleryCollection.remove({_id:jewelleryId}).then((result) => {
        res.send({"status":"jewellery Deleted Successfully"});
        next();
    }).catch((err) => {
        return next(err)
    })
}


module.exports = router