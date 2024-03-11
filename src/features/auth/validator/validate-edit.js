import Joi from 'joi';
import validate from '../../../ultils/validate';

const editSchema = Joi.object({
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

const validateEdit = (input) => validate(editSchema)(input);

export default validateEdit;
