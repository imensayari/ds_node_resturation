const express = require('express');
const router = express.Router();
const Joi = require('joi')


const film = require('../models/film');
const seance = require('../models/seance');

router.get('/films', (req, res, next) => {
    film.find(function (err, Films) {
        res.json(Films);
    });
});

router.get('/seance', (req, res, next) => {
    seance.find(function (err, seances) {
        res.json(seances);
    });
});

//add film 
router.post('/film', (req, res, next) => {
    let newfilm1 = Joi.object().keys({
        name: req.body.name,
        seances: req.body.seances
    });
    let newfilm = new film({
        name: req.body.name,
        seances: req.body.seances
    });
    Joi.valid(newfilm, newfilm1, (err, result) => {
        if (err) {
            res.send("an error has")
        }
        res.send("successfully posted date")
    });
    film.save((err, newfilm) => {
        if (err) {
            res.json({ msg: 'Failed to add film' });
        }
        else {
            res.json(newfilm);
        }
    });
});

//delete film
router.delete('/film/:id', (req, res, next) => {
    film.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

//delete seance
router.delete('/seance/:id', (req, res, next) => {
    film.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    });
});

//update film
router.put('/film/:id', (req, res, next) => {
    film.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            seances: req.body.seances
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        }
    )
});


//update seance
router.put('/seance/:id', (req, res, next) => {
    seance.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            date: req.body.date,
            temps: req.body.temps,
            acteurs: req.body.acteurs,
            nombre_places: req.body.temps,
            film: req.body.film
        }
    },
        function (err, result) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        }
    )
});

//réservations  
router.post('/reservations', (req, res, next) => {
    let seance = Joi.object().keys({
        date: req.body.date,
        temps: req.body.temps,
        acteurs: req.body.acteurs,
        nombre_places: req.body.temps,
        film: req.body.film
    });

    let reservation_seance = new seance({
        date: req.body.date,
        temps: req.body.temps,
        acteurs: req.body.acteurs,
        nombre_places: req.body.temps,
        film: req.body.film
    });

    seance.save((err, reservation_seance) => {
        if (err) {
            res.json({ msg: 'Failed to add seance' });
        }
        else {
            res.json(reservation_seance);
        }
    });
});

module.exports = router;