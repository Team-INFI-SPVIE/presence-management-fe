export interface Credentials {
    email: string,
    password: string
}

export interface UserForm {
    first_name: string;
    last_name:  string;
    email: string;
    phone: string;
    password: string;
  }

  export interface UserForm1 {
    first_name: string;
    last_name:  string;
    email: string;
    phone: string;
    password: string;
    matters : string;
  }
  export interface UserForm3 {
    first_name: string;
    last_name:  string;
    email: string;
    phone: string;
    password: string;
    picture:string
}
export interface UserForm4 {
  object: string;
  startTime: string;
  endTime: string;
  message: string;
  piecejointe: string
}

export interface Matter {
  name: string;
}

