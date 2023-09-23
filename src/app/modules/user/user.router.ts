import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { UserValidation } from './user.validation';
const router = express.Router();

router
  .route(`/create-student`)
  .post(
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    FileUploadHelper.upload.single(`file`),
    UserController.createStudent,
    (req: Request, res: Response, next: NextFunction) => {
      req.body = UserValidation.createStudentZodSchema.parse(JSON.parse(req.body.data));
      return UserController.createStudent(req, res, next);
    }
  );

export const UserRouter = router;
