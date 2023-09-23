import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {

  
  const file = req.file as IUploadFile;
  const uploadedImage: ICloudinaryResponse = await FileUploadHelper.uploadToCloudinary(file);
  
  
  
  if (uploadedImage) {
    req.body.profileImage = uploadedImage.secure_url
  }

  const obj = JSON.stringify(req.body, null, 2)
  
  console.log(obj.replace(/\n/g, ''))

  const { academicDepartment, academicFaculty, academicSemester } = req.body;


  const academicDepartmentResponse = await AuthService.get(`/academic-departments?syncId=${academicDepartment}`)

  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id
  }

  const academicFacultyResponse = await AuthService.get(`/academic-faculties?syncId=${academicFaculty}`)

  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse)) {
    req.body.student.academicFaculty = academicDepartmentResponse.data[0].id
  }

  const academicSemesterResponse = await AuthService.get(`/academic-semesters?syncId=${academicSemester}`)

  if (academicSemesterResponse.data && Array.isArray(academicFacultyResponse)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id
  }


};

export const UserService = { createStudent };
