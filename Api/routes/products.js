const express = require("express");
const router=express.Router();
const mongoose=require("mongoose");

const Product =require('./models/product');

//GET product route

router.get('/',(req,res,next)=>{
    res.status(200).json  ({
        message: "Handling GET requests to the /products."
    });
});

//POST product route

router.post('/',(req,res,next)=>{
    // const product={
    //      name :req.body.name,
    //      price : req.body.price
    // }
    const product= new Product({
        _id : mongoose.Types.ObjectId(), //special type of id provided by moongose
        name: req.body.name,
        price: req.body.price
    });

    product.save().then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })     //This will save the product in database and show result/error on console
    res.status(201).json  ({
        message: "Handling POST requests to the /products.",
        Createdproduct : product
    });
});

//To get specific product with specific id

router.get('/:productId:',(req,res,next)=> { 
      const id=req.params.productId;
    //   if(id === 'special'){
    //     res.status(200).json({
    //         message: "Id found successfully!",
    //         id : id
    //     });
    //   }
    //   else{
    //     res.status(200).json({
    //        message: "You passed an ID"

    //     });
    //   }

    Product.findById(id)
        .exec()
        .then(doc=>{
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err=> {
            console.log(err);
            res.status(500).json({error:err})
        });

});

//Route to update specific product

router.patch('/:productId:',(req,res,next)=> { 
    
    res.status(200).json({
           message:"Product updated Successfully!"
    });
});

// Route To delete specific product
router.delete('/:productId:',(req,res,next)=> { 
    
    res.status(200).json({
           message:"Product Deleted Successfully!"
    });
});

module.exports = router;
