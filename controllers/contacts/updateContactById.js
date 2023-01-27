const Contact = require("../../models/contact");
const { putContactsSchema } = require("../../schema/schema");

const updateContactById = async (req, res) => {
  const { error } = putContactsSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(result);
};

module.exports = updateContactById;
