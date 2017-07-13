const express = require('express');
const router = new express.Router();
import commonValidations from '../validations/signup';
import bcrypt from 'bcrypt';
const config = require('../config/index.json');
const User = require('mongoose').model('User');
import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';

function validateInput(data, otherValidations) {
  let { errors } = otherValidations(data);

  // quries the data base to check for existence of username and email
  // warpped in a promise so that queries can occur and then answer passed back to client
  return Promise.all([
    User.count({username: data.username}, function (err, count) {
      if(count > 0){
        { errors.username = 'There is a user with that username already'}
        //username already exists
      }
    }),

    User.count({email: data.email}, function (err, count) {
      if(count > 0){
        { errors.email = 'There is a user with that email already'}
        //email already exists
      }
    })
  ]).then(() => {
    return {
      errors,
      isValid: isEmpty(errors)
    }
  });

}

router.get('/:identifier', (req, res) => {

  User.findOne({
    username: req.params.identifier
  }, function (err, existingUser) {
    if (err) {
      console.error(err);
      return res.status(500).json({ errors: {global: "something went wrong"} });
    }
    return res.status(200).json({ existingUser });
  })

});

router.post('/', (req, res) => {
  validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
    if (isValid) {
      const { username, email, password } = req.body;
      const password_digest = bcrypt.hashSync(password, 10);
      const user = User({ username, email, password_digest });
      console.log("Adding user with req body:", { username, email, password_digest });
      user.save((err, savedUser) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ errors: {global: "something went wrong"} });
        }
        return res.json({ success: true });
      });
    } else {
      res.status(400).json({ errors });
    }
  });
});

module.exports = router;
