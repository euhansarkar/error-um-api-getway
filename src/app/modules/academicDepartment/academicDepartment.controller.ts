import { RequestHandler } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';

const create: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicDepartmentService.create(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicDepartmentController = { create };
