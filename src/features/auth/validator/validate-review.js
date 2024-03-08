import Joi from 'joi';
import validate from '../../../ultils/validate';

const reviewSchema = Joi.object({
  rating: Joi.number().integer().positive().required().messages({
    'string.empty': 'rating is required',
    'any.required': 'rating is required',
    'number.base': 'rating must be a number',
    'number.integer': 'rating must be an integer',
  }),
  comment: Joi.string().required().trim().messages({
    'string.empty': 'comment is required',
    'any.required': 'comment is required',
  }),
});

const validateReview = (input) => validate(reviewSchema)(input);

export default validateReview;
