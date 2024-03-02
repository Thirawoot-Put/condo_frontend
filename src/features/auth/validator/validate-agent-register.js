import Joi from 'joi';
import validate from '../../../ultils/validate';

const agentRegisterSchema = Joi.object({
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
  mobile: Joi.string()
    .pattern(/^[0][0-9]{9}$/)
    .messages({
      'string.empty': 'Mobile is required',
      'any.required': 'Mobile is required',
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
    .required()
    .pattern(/^[0-9]{10}$/)
    .messages({
      'string.empty': 'Mobile number is required',
      'string.pattern.base': 'Mobile number must be 10 characters',
    }),
});

const validateAgentRegister = (input) => validate(agentRegisterSchema)(input);

export default validateAgentRegister;
