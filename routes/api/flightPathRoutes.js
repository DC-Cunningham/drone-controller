const router = require("express").Router();
const flightPathController = require("../../controllers/flightPathController");

router
  .route("/")
  .get(flightPathController.findAll)
  .post(flightPathController.create);

router
  .route("/:id")
  .get(flightPathController.findById)
  .put(flightPathController.update)
  .delete(flightPathController.remove);

module.exports = router;
