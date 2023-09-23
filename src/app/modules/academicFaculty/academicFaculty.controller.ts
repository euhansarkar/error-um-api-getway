import { RequestHandler, NextFunction } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

const create: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyService.create(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyService.getAll(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOne: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyService.getOne(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOne: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyService.updateOne(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOne: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicFacultyService.deleteOne(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = { create, getAll, getOne, updateOne, deleteOne };
