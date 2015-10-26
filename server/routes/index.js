var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Customer = require('../data/customer');

router.get('/customer/:id', function (req, res, next) {
    Customer.findById(req.params.id, function (err, customer) {
        res.json({
            SUCCESS: customer
        })
    })
});

router.get('/customers', function (req, res, next) {
    Customer.find(function (err, customers) {
        console.log(err, customers);
        if (err) {
            res.json({
                'message': err
            });
        } else {
            res.json(customers);
        }
    })
});



router.post('/customer', function (req, res, next) {
    var newCustomer = new Customer({
            name: req.body.name,
            revenue: req.body.revenue,
            email: req.body.email
        })
        .save(function (err, customer) {
            res.json({
                SUCCESS: customer
            })
        })
});


router.put('/customer/:id', function (req, res, next) {
    var update = {
        name: req.body.name,
        revenue: req.body.revenue,
        email: req.body.email
    }

    Customer.findByIdAndUpdate(req.params.id, update, {
            new: true
        },

        function (err, customer) {
            res.json({
                SUCCESS: customer
            })
        })
});


router.delete('/customer/:id', function (req, res, next) {
    Customer.findByIdAndRemove(req.params.id, function (result) {
        res.json({
            "REMOVED": result
        });
    })
});



module.exports = router;