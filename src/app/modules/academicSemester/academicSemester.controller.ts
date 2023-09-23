import { RequestHandler, NextFunction } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const create: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await AcademicSemesterService.create(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getAll: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterService.getAll(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOne: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterService.getOne(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateOne: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterService.updateOne(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOne: RequestHandler = async (req, res, next) => {
  try {
    const result = await AcademicSemesterService.deleteOne(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = { create, getAll, getOne, updateOne, deleteOne };
