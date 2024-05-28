import { IAcademicSemestre } from "./types";

export interface IStudent {
  _id: string;
  id: string;
  user: IUser;
  name: IName;
  gender: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg: string;
  admissionSemester: IAcademicSemestre;
  isDeleted: boolean;
  academicDepartment: IAcademicDepartment;
  academicFaculty: string;
  fullName: string;
}

export interface IUser {
  _id: string;
  id: string;
  email: string;
  needsPasswordChange: boolean;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IName {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
}

export interface IGuardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
  _id: string;
}

export interface ILocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
  _id: string;
}

export interface IAcademicDepartment {
  _id: string;
  name: string;
  academicFaculty: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
