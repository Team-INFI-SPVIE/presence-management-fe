export interface ApiData {
    users: Users
  }

  export interface Users {
    admin: Admin
    professors: Professor[]
    students: Student[]
    presences: Presence[]
  }

  
  export interface Matter {
    id: string
    name: string
    nameAdmin? : string | null
    registered: string
  }

  

  export interface Admin {
    id: string
    picture: string
    first_name: string
    last_name: string
    full_name: string
    email: string
    about: string
    role: string
    password: string
    registered: string
    phone: string
  }

  export interface Professor {
    id: string
    picture: string
    first_name: string
    last_name: string
    full_name: string
    email: string
    about: string
    role: string
    matters: string
    password: string
    registered: string
    phone: string
  }

  export class Student {
    id!: string
    picture?: string
    first_name!: string
    last_name!: string
    full_name!: string
    email!: string
    is_present!: boolean
    registered?: string
    role?: string
    phone?: string
    password?: string
  }

  // export interface Presence {
  //   id: string
  //   createdAt: Date
  //   matter: string
  //   startTime: string
  //   endTime: string
  //   studentsPresenses: StudentsPresenses[]
  // }

  // export class StudentsPresenses {
  //   idStudent!: string
  //   first_name!: string
  //   last_name!: string
  //   email!: string
  //   is_present!: boolean
  //   role?: string
  //   phone?: string
  //   date?: Date
  // }


  export interface Presence {
    id: string
    createdAt: Date
    professor: string
    matter: string
    startTime: string
    endTime: string
    studentsPresenses: StudentsPresenses[]
  }
  
  export interface StudentsPresenses {
    id: string
    first_name: string
    last_name: string
    email: string
    is_present: boolean
    role?: string
    phone?: string
    date: Date
  }
  // export class Score {
  //   _id!: string
  //   picture!: string
  //   idProfessor!: string
  //   firstNameStudent!: string
  //   lastNameStudent!: string
  //   phoneStudent!: string
  //   matter!: string
  //   is_present!: boolean
  //   startTime!: string
  //   endTime!: string
  //   registered?: Date
  // }
  export class AbsenceRequests {
    id !: string
    object!: string
    date!: Date
    startTime!: string
    endTime!: string
    message!: string
    name!: string
    status!: boolean
    piecejointe!: string
  }
  
