const express = require('express');
const Rental = require('../modals/Rental');
const router = express.Router();

router.get('/',(req,res)=>{
    Rental.find({},(err,rentals)=>{
        res.json(rentals);
    })
});

router.get('/:id',(req,res)=>{
    const rentalID = req.params.id;

    console.log(rentalID);

    Rental.findById(rentalID,(err,foundRental)=>{

        if(err){
            res.status(422).send({error:[{tittle:"Rental Error",details:"Not able to locate your Rental"}]});
        }
        
        res.json(foundRental);
    })
})

module.exports = router;