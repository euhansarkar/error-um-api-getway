import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';
const router = express.Router();

router
  .route(`/`)
  .post(
    validateRequest(AcademicFacultyValidation.create),
    auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    AcademicFacultyController.create
  )
  .get(AcademicFacultyController.getAll);

router
  .route(`/:id`)
  .get(AcademicFacultyController.getOne)
  .patch(AcademicFacultyController.updateOne);

export const AcademicFacultyRouter = router;
