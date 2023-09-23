import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HTTPStatus } from '../../../shared/axios';

const create = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPStatus.post(`/academic-departments`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicDepartmentService = { create };
