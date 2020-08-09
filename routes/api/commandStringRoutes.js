const router = require("express").Router();
const commandStringController = require("../../controllers/commandStringController");

// Matches with "/api/users"
router
  .route("/")
  .get(commandStringController.findAll)
  .post(commandStringController.create);

router
  .route("/:id")
  .get(commandStringController.findById)
  .put(commandStringController.update)
  .delete(commandStringController.remove);

module.exports = router;
