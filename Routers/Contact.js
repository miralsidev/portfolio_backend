const router = require('express').Router()
const ContactController = require('../Controller/Contact')
router.post("/contact",ContactController.addContact)
module.exports = router