const express = require('express');
const {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require('../controller');
const router = express.Router();

router.post('/', createContact);
router.get('/', getContacts);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;