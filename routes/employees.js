const router = require("express").Router();
const employeesController = require("../controllers/employees_controller.js")

//get all the employees
router.route("/").get(employeesController.findAll);

//search first_name, last_name, or gender
router.route("/api/search_exact").get(employeesController.findByFieldExactValue);

//search age, greater than
router.route("/api/search_greater").get(employeesController.findByFieldGreaterThan);

//search age, less than
router.route("/api/search_lesser").get(employeesController.findByFieldLessThan);