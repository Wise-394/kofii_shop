import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = "uploads/coffee";

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: uploadPath,
  filename: (req, file, next) => {
    const ext = path.extname(file.originalname);

    next(null, crypto.randomUUID() + ext);
  },
});

const fileFilter: multer.Options["fileFilter"] = (req, file, next) => {
  const allowed = ["image/jpeg", "image/png", "image/webp"];
  if (allowed.includes(file.mimetype)) {
    next(null, true);
  } else {
    next(new Error("file type not allowed"));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});
