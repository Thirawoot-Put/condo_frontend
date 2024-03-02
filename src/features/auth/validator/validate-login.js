import Joi from 'joi';
import validate from '../../../ultils/validate';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'Username is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
  }),
});

const validateLogin = (input) => validate(loginSchema)(input);

export default validateLogin;
