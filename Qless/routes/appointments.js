const express = require('express');
const appointments = require('../models/appointments');


const router = express.Router();

//save appointments
router.post('/appointments/save', (req, res) => {
    let newAppointments= new appointments(req.body);
    newAppointments.save((err) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "New appointments added successfully."
        });
    });
});

//get appointments
router.get('/appointments', (req, res) => {
    appointments.find().exec((err, appointments) => {
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success:true,
            existingAppointments:appointments
        });
    });
});

//get a specific appointments
router.get("/appointments/:id", (req, res) => {
    let appointmentsId = req.params.id;
    appointments.findById(appointmentsId, (err, appointments) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            appointments
        });
    });
});

//update appointments
router.put('/appointments/update/:id',(req,res) => {
    appointments.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, appointments) => {
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete appointments
router.delete('/appointments/delete/:id', (req, res) => {
    appointments.findByIdAndRemove(req.params.id).exec((err, deletedappointments) => {
        if(err) return res.status(400).json({
            message: "Delete unsuccessful", err
        })
        return res.status(200).json({
            message: "Deleted Successfully", deletedappointments
        })
    });
});


module.exports = router; 