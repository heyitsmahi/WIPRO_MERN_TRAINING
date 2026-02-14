const router = require("express").Router();

const authController = require("../controllers/authController");
const adminController = require("../controllers/adminController");
const studentController = require("../controllers/studentController");
const courseController = require("../controllers/courseController");
const reportController = require("../controllers/reportController");

const { isAuthenticated, authorize } = require("../middlewares/authMiddleware");


router.get("/login", authController.showLogin);
router.post("/login", authController.login);

router.get("/dashboard",
  isAuthenticated,
  authController.dashboard
);

router.get("/logout", authController.logout);

// Admin
router.get("/admin/instructor",
  isAuthenticated,
  authorize("admin"),
  (req, res) => {
    res.render("createInstructor");
  }
);
router.get("/admin/course",
  isAuthenticated,
  authorize("admin"),
  (req, res) => {
    res.render("createCourse");
  }
);

// Students
router.get("/student/create",
  isAuthenticated,
  authorize("admin"),
  (req, res) => {
    res.render("createStudent");
  }
);
 //mycourses
router.get("/my-courses",
  isAuthenticated,
  authorize("student"),
  studentController.myCourses
);


router.post("/student/create",
  isAuthenticated,
  authorize("admin"),
  studentController.createStudent
);

router.get("/students",
  isAuthenticated,
  authorize("admin"),
  studentController.listStudents
);



// Enroll
router.get("/enroll",isAuthenticated,
courseController.showEnrollPage);

router.post("/enroll",isAuthenticated,
courseController.enrollStudent);

module.exports = router;
