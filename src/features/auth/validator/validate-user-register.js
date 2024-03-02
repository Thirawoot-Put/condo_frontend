import Joi from 'joi';
import validate from '../../../ultils/validate';

const userRegisterSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'Username is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')).messages({
    'string.empty': 'Confirm password is required',
    'any.only': 'Password and confirm password not match',
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'Email address is required',
    'string.email': 'Email address must be in correct form',
  }),
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required',
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'Last name is required',
  }),
  mobile: Joi.string()
    .allow('', null)
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.pattern.base': 'Mobile number must be 10 characters',
    }),
});

const validateLogin = (input) => validate(userRegisterSchema)(input);

export default validateLogin;
