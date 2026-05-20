

import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const noteIdParamSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(3).max(30).required().messages({
      "string.base": "Title must be a string",
      "string.min": "Title should have at least {#limit} characters",
      "string.max": "Title should have at most {#limit} characters",
      "any.required": "Title is required",
    }),
    content: Joi.string().min(5).max(65).required().messages({
      "string.base": "Content must be a string",
      "string.min": "Content should have at least {#limit} characters",
      "string.max": "Content should have at most {#limit} characters",
      "any.required": "Content is required",
    }),
    tag: Joi.string().min(3).max(15).required().messages({
      "string.base": "Tag must be a string",
      "string.min": "Tag should have at least {#limit} characters",
      "string.max": "Tag should have at most {#limit} characters",
      "any.required": "Tag is required",
    }),
  }),
};
