import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();

function validateInput(data) {
  let errors = {};

  if (data.username === '') errors.username = "Can't be empty";
  if (data.email === '') errors.email = "Can't be empty";
  if (data.password === '') errors.password = "Can't be empty";
  if (data.passwordConfirmation === '') errors.passwordConfirmation = "Can't be empty";
  if (data.password !== data.passwordConfirmation) errors.passwordConfirmation = "Passwords must match";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid }
}

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);

  if (!isValid) {
    res.status(400).json({ errors });
  }
});

export default router;
