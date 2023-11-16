const { check } = require("express-validator")

exports.createPostValidator = [
  check('title').notEmpty().withMessage('Write a title'),
  check('title').isLength({
    min: 4, max: 150
  }).withMessage('Title must be between 4 to 150 characters'),
  check('body',).notEmpty().withMessage('Write a body'),
  check('body').isLength({
    min: 4, max: 2000
  }).withMessage('Body must be between 4 to 2000 characters')

]

// exports.createPostValidator = (req, res, next) => {
//   check('title').notEmpty().withMessage('Write a title')
//   check('title').isLength({
//     min: 4, max: 150
//   }).withMessage('Title must be between 4 to 150 characters')
//   check('body',).notEmpty().withMessage('Write a body')
//   check('body').isLength({
//     min: 4, max: 2000
//   }).withMessage('Title must be between 4 to 2000 characters')

//   // check for errors
//   const errors = validationResult(req)
//   console.log('req: ', req)
//   console.log('errors: ', errors)

//   if (!errors.isEmpty()) {
//     return res.status(422).jsonp(errors.array());
//   }
//   else {
//     res.send({});
//   }
//   // if error show the first one as they happen
//   // if (errors) {
//   //     const firstError = errors.map((err) => { err.msg })[0]
//   //     return res.status(400).json({ error: firstError })
//   //  }
//   // proceed to next middleware
//   next();
// }