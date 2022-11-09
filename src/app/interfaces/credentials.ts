export interface CurrentUser {
  id: string;
  picture: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  phone?: string;
  password: string;
  registered: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface UserForm {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface UserForm1 {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  matters: string;
}
export interface UserForm3 {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  picture: string;
  password: string;
}

export interface Score {
  _id: string;
  picture: string;
  idProfessor: string;
  firstNameStudent: string;
  lastNameStudent: string;
  phoneStudent: string;
  matter: string;
  startTime: string;
  endTime: string;
  registered: string;
  is_present: boolean;
}

export interface UserForm4 {
  object: string;
  startTime: string;
  endTime: string;
  message: string;
  piecejointe: string;
  date: Date;
}

export interface Matter {
  name: string;
}
