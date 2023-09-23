import { RequestHandler } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const result: any = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = { createStudent };
