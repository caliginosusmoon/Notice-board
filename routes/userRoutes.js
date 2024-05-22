const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/add", userController.createUser);
router.post("/login", userController.loginUser);
// router.get("/all", noticeController.getAllNotices);
// router.put("/:id", noticeController.updateNotice);
// router.delete("/:id", noticeController.deleteNotice);
module.exports = router;
