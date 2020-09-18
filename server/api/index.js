const router = require('express').Router()
module.exports = router

router.use('/mail', require('./mail'))
router.use('works', require('./works'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
