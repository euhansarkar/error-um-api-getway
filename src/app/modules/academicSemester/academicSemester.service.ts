import { Request } from 'express';
import { CoreService as HTTPService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const create = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.post(`/academic-semesters`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getAll = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.get(`/academic-semesters`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const getOne = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.get(`/academic-semesters/${req.params.id}`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateOne = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.patch(
    `/academic-semesters/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteOne = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HTTPService.get(`/academic-semesters/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = { create, getAll, getOne, updateOne, deleteOne };
