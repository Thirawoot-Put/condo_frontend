import Joi from 'joi';
import validate from '../../../ultils/validate';

const userRegisterSchema = Joi.object({
  username: Joi.string()
    .required()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .message({
      'string.empty': 'Username is required',
      'any.required': 'Username is required',
      'string.pattern.base':
        'username must be in alphabet or numeric and at least 6 digits',
    }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.pattern.base':
        'Password must be at least 6 characters and contain only alphabet and number',
      'any.required': 'Password is required',
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': 'Confirm password is required',
      'any.only': 'password and Confirm password did not match',
      'any.required': 'Confirm password is required',
    })
    .strip(),
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'Email address is required',
    'any.required': 'Email address is required',
  }),
  firstName: Joi.string().required().trim().messages({
    'string.empty': 'First name is required',
    'any.required': 'First name is required',
  }),
  lastName: Joi.string().required().trim().messages({
    'string.empty': 'Last name is required',
    'any.required': 'Last name is required',
  }),
  mobile: Joi.string()
    .allow('', null)
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.pattern.base': 'Mobile number must be 10 characters',
    }),
});

const validateUserRegister = (input) => validate(userRegisterSchema)(input);

export default validateUserRegister;
