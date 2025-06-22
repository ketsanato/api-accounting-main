const Constorller = require('../controllers/ActivityDetailFile');
const router = require('express').Router();
const db = require("../model");
const Model = db.ActivityDetailFile;

const url = "/ActiveityDetailFile";
const multer  = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")

    },
    filename:(req,file,cb)=>{
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,uniqueSuffix+"-"+file.originalname);

    }

})
const upload = multer({storage});
const fs=require('fs')
router.get(url + '/get', Constorller.get);
router.post(url + '/getbyid', Constorller.getbyid);
router.post(url + '/getbyone', Constorller.getByOne);

//router.post(url + '/create', Constorller.create);

router.put(url + '/update', Constorller.update);
router.delete(url + '/delete', Constorller.delete);

router.post(url + '/create', upload.single('file'),async function asy(req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   
try{
const from =req.body;
const file=req.file
console.log(file)
   const  data1={
    Detail:from.Detail,
    FileName:file.originalname,
    Path:file.path,
    ActivityDetailID:from.ActivityDetailID
}
const data = await Model.create(data1);
    res.status(201).json({
      data: data,
      message: "Create successfully",
      status: true,
    });

}catch (error) {
    console.error("Error creating Currency:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
 
});

router.post(url + '/update', upload.single('file'),async function asy(req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
try{
const from =req.body;
const file=req.file

   const  data1={
    Detail:from.Detail,
    FileName:file.filename,
    Path:file.path,
    ActivityDetailID:from.ActivityDetailID
}
  const data = await Model.update(data1, {
      where: {
        ActivityDetailFileID: from.ActivityDetailFileID,
      },
    });

    res.status(201).json({
      data: data,
      message: "update successfully",
      status: true,
    });
  } catch (error) {
    console.error("Error update:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});
module.exports = router;