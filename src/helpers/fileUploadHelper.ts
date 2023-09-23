import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'df916o3vt',
  api_key: '342159663132698',
  api_secret: 'WF1_1MXe0XXvIQegYzDAcKLm49M'
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `upload/`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<ICloudinaryResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: ICloudinaryResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const FileUploadHelper = { uploadToCloudinary, upload };
