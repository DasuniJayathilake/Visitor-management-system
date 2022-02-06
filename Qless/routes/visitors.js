const express = require('express');
const visitors = require('../models/visitors');


const router = express.Router();

//save visitors
router.post('/visitors/save', (req, res) => {
    let newVisitors = new visitors(req.body);
    newVisitors.save((err) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "New visitor added successfully."
        });
    });
});

//get visitors
router.get('/visitors', (req, res) => {
    visitors.find().exec((err, visitors) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success:true,
            existingVisitors:visitors
        });
    });
});

//get a specific visitors
router.get("/visitors/:id", (req, res) => {
    let visitorsId = req.params.id;
    visitors.findById(visitorsId, (err, visitors) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            visitors
        });
    });
});

//update visitors
router.put('/visitors/update/:id',(req,res) => {
    visitors.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, visitors) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete visitors
router.delete('/visitors/delete/:id', (req, res) => {
    visitors.findByIdAndRemove(req.params.id).exec((err, deletedvisitors) => {
        if(err) return res.status(400).json({
            message: "Delete unsuccessful", err
        })
        return res.status(200).json({
            message: "Deleted Successfully", deletedvisitors 
        })
    });
});


module.exports = router; 