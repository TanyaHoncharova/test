const { Schema, model } = require('mongoose');
const Joi = require('joi');

const feedbackSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for contact'],

  },
  email: {
    type: String,
    required: [true, 'Set email for contact'],

  },
  message: {
    type: String,
    required: [true, 'Set your message'],

  }
}, {
  // не указываем версию v
  versionKey: false,
  // добавляет два поля с указанием  create, update
  timestamps: true
});

const joiSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  message: Joi.string().required(),

});

const Feedback = model('feedback', feedbackSchema);

module.exports = {
  Feedback,
  joiSchema

}
