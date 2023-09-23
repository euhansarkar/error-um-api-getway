import express from 'express';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.router';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.router';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.router';
import { UserRouter } from '../modules/user/user.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: `/users`,
    routes: UserRouter
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRouter
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRouter
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRouter
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
