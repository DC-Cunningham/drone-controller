const router = require("express").Router();
const flightPathRoutes = require("./flightPathRoutes");
const commandStringRoutes = require("./commandStringRoutes");

router.use("/flightpath", flightPathRoutes);
router.use("/command", commandStringRoutes);

module.exports = router;
