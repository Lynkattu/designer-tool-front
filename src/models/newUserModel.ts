export interface NewUserModel {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  username: string;
  password: string;
  role: string;
}