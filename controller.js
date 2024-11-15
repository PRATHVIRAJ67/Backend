const Contact = require('./models/contactModel');

const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
};

const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!contact) return res.status(404).send({ error: 'Contact not found' });
    res.send(contact);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteContact = async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) return res.status(404).send({ error: 'Contact not found' });
  res.send({ message: 'Contact deleted' });
};

module.exports = {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
};
