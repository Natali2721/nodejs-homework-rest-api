const Contact = require("../../models/contact");
const { updateFavoriteSchema } = require("../../schema/validation");

async function updateStatusContact(contactId, body) {
  const result = await Contact.findByIdAndUpdate(contactId, body, {
    new: true,
  });
  return result;
}

const updateFavorite = async (req, res) => {
  const { error } = updateFavoriteSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: "missing field favorite" });
    return;
  }
  const { contactId } = req.params;

  const result = await updateStatusContact(contactId, req.body);

  if (!result) {
    res.status(404).json({ message: "Not found" });
    return;
  }
  res.json(result);
};

module.exports = updateFavorite;
