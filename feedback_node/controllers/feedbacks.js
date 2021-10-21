const { NotFound } = require('http-errors');
// const service = require('../service')
const { Feedback } = require('../model/feedbacks');

// поиск отзывов по email (email ожидается в теле запроса)
const getByEmail = async(req, res, next) => {
  const { email } = req.body;
  console.log(typeof (email));
  const feedback = await Feedback.find({ email });
  if (!feedback) {
    throw new NotFound(`Contact with id=${email} not found`);
  }
  res.json({
    status: 'ok',
    code: 200,
    data: { feedback }
  })
}

// добавление отзыва
const add = async (req, res, next) => {
  console.log(req.body)
  const result = await Feedback.create(req.body)
  res.json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

const removeById = async (req, res, next) => {
  const { feedbackId } = req.params;
  const result = await Feedback.findByIdAndDelete(feedbackId);
  if (!result) {
    throw new NotFound(`Contact with id=${feedbackId} not faund`);
  }
  res.json({
    status: 'succes',
    code: 200,
    message: 'feedback deleted'
  });
}

const updateById = async (req, res, next) => {
  const { feedbackId } = req.params;
  const result = await Feedback.findByIdAndUpdate(feedbackId, req.body);
  if (!result) {
    throw new NotFound(`Contact with id=${feedbackId} not faund`);
  }
  res.json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
};

module.exports = {
  getByEmail,
  add,
  removeById,
  updateById

}
