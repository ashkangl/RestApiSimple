import multer from "multer";
import fs from 'fs';
import path from "path";

var dir = './uploads';
const upload = multer({
    storage: multer.diskStorage({
  
      destination: function (req, file, callback) {
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }
        callback(null, './uploads');
      },
      filename: function (req, file, callback) { callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); }
  
    }),
  
    fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname)
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.mp4' && ext !== '.jfif' && ext !== '.webp' && ext !== ".bmp") {
        return callback(/*res.end('Only images are allowed')*/ null, false)
      }
      callback(null, true)
    }
});

export default upload;