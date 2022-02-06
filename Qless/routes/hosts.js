const express = require('express');
const hosts = require('../models/hosts');



const router = express.Router();

//save hosts
router.post('/hosts/save', (req, res) => {
    let newHosts = new hosts(req.body);
    newHosts.save((err) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "New host added successfully."
        });
    });
});

//get hosts
router.get('/hosts', (req, res) => {
    hosts.find().exec((err, hosts) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success:true,
            existingHosts:hosts
        });
    });
});

//get a specific hosts
router.get("/hosts/:id", (req, res) => {
    let hostsId = req.params.id;
    hosts.findById(hostsId, (err, hosts) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            hosts
        });
    });
});

//update hosts
router.put('/hosts/update/:id',(req,res) => {
    hosts.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, hosts) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete hosts
router.delete('/hosts/delete/:id', (req, res) => {
    hosts.findByIdAndRemove(req.params.id).exec((err, deletedhosts) => {
        if(err) return res.status(400).json({
            message: "Delete unsuccessful", err
        })
        return res.status(200).json({
            message: "Deleted Successfully", deletedhosts 
        })
    });
});


module.exports = router; 