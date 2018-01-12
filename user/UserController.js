var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

var User = require('./User');

// Creates a new user
router.post('/', function (req, res) {
    User.create({
            forename: req.body.forename,
            surname: req.body.surname,
            email: req.body.email,
            createdAt: Date.now() 
        }, 
        //Handle error, if all ok return 200
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// Returns all the users in the database
router.get('/', function (req, res) {
  User.find(req.query, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
  });
});

// Gets a single user from the database
router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
  });
});

// Deletes a user from the database
router.delete('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
      res.status(200).send("User "+ user.forename + " " + user.surname +" was deleted.");
  });
});

// Updates a user in the database
router.put('/:id', function (req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
      if (err) return res.status(500).send("There was a problem updating the user.");
      res.status(200).send(user);
  });
});

module.exports = router;
