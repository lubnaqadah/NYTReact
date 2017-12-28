const router = require("express").Router();
const articleRoutes = require("./articleRoutes");

// Book routes
router.use("/Articles", articleRoutes);

module.exports = router;
