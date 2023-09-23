import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

router
  .route(`/`)
  .post(
    // validateRequest(AcademicSemesterValidation.create),
    // auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
    AcademicSemesterController.create
  )
  .get(AcademicSemesterController.getAll);

router
  .route(`/:id`)
  .get(AcademicSemesterController.getOne)
  .patch(AcademicSemesterController.updateOne);

export const AcademicSemesterRouter = router;
