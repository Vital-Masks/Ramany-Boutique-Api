const express = require('express');
const router = express.Router()
const jewelleryCollection = require('../persistence/jewellery-collection')
const jewelleryLogics = require('../business-logics/jewellery-logics')


router.post('/', createjewellery)
router.get('/', getAlljewellerys)
router.get('/:jewelleryId', getjewelleryById)
router.get('/category/:categoryId', getjewelleryByCategory)
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
    return jewelleryCollection.findByIdAndUpdate(jewelleryId, jewelleryObject).then((result)=>{
        res.send(result)
    })
}

function getjewelleryByCategory(req, res, next){    
    const {params:{ categoryId }} = req
    return jewelleryCollection.find({categoryId: categoryId}).then((result) => {
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