import Joi from 'joi';
import validate from '../../../ultils/validate';

const userRegisterSchema = Joi.object({
  username: Joi.string()
    .required()
    .trim()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .message({
      'string.empty': 'username is required',
      'any.required': 'username is required',
      'string.pattern.base':
        'username must be in alphabet or numeric and at least 6 digits',
    }),
  mobile: Joi.string()
    .pattern(/^[0][0-9]{9}$/)
    .messages({
      'string.empty': 'mobile is required',
      'any.required': 'mobile is required',
    }),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      'string.empty': 'password is required',
      'string.pattern.base':
        'password must be at least 6 characters and contain only alphabet and number',
      'any.required': 'password is required',
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'string.empty': 'confirm password is required',
      'any.only': 'password and confirm password did not match',
      'any.required': 'confirm password is required',
    })
    .strip(),
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.empty': 'email is required',
    'any.required': 'email is required',
  }),
  firstName: Joi.string().required().trim().messages({
    'string.empty': 'first name is required',
    'any.required': 'first name is required',
  }),
  lastName: Joi.string().required().trim().messages({
    'string.empty': 'last name is required',
    'any.required': 'last name is required',
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
