const express = require("express");

const controller = require("../../controllers/contacts");

const { controllerWrapper, isValidId } = require("../../helpers");

const router = express.Router();

router.get("/", controllerWrapper(controller.getAllContacts));

router.get(
  "/:contactId",
  isValidId,
  controllerWrapper(controller.getContactById)
);

router.post("/", controllerWrapper(controller.addContact));

router.delete(
  "/:contactId",
  isValidId,
  controllerWrapper(controller.removeContactById)
);

router.put(
  "/:contactId",
  isValidId,
  controllerWrapper(controller.updateContactById)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  controllerWrapper(controller.updateFavorite)
);

module.exports = router;
