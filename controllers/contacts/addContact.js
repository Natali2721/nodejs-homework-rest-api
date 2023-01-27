const Contact = require("../../models/contact");
const { addContactsSchema } = require("../../schema/validation");

const addContact = async (req, res) => {
  const { error } = addContactsSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = addContact;
