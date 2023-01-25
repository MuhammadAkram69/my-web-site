const express=require("express");
const router=express.Router();

//Route to fetch order
router.get('/',(req,res,next)=>{
    res.status(200).json  ({
        message: "Order were fetched!"
    });
});

//Route to create order

router.post('/',(req,res,next)=>{
    const order={
        orderId: req.body.orderId,
        quantity: req.body.quantity
    }
    res.status(201).json  ({
        message: "Order were created!",
        order:order
    });
});

//Route to fetch individual order

router.get('/:orderId',(req,res,next)=>{
    res.status(200).json  ({
        message: "Order Details!",
        orderId:req.params.orderId
    });
});

//Route to delete order

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json  ({
        message: "Order Deleted!",
        orderId:req.params.orderId
    });
});

module.exports=router;