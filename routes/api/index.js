const router = require("express").Router();
const flightPathRoutes = require("./flightPathRoutes");
const commandStringRoutes = require("./commandStringRoutes");

router.use("/flightpath", flightPathRoutes);
router.use("/commandstring", commandStringRoutes);

module.exports = router;
