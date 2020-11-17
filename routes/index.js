const router = require("express").Router();
const bookRoutes = require("./employees.js");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
