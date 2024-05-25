const express=require("express");
const router=express.Router();
const noticeController=require("../controllers/noticeController");

router.get("/", (req, res)=>{
    res.send("hello");
});

router.post("/add", noticeController.createNotice);
router.get("/all", noticeController.getAllNotices );
router.put("/:id", noticeController.updateNotice);
router.delete("/:id", noticeController.deleteNotice);
module.exports=router;