import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
const router = express.Router();

router.route(`/`).post(AcademicDepartmentController.create);

export const AcademicDepartmentRouter = router;
