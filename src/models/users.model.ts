export interface ApiData {
    users: Users
  }

  export interface Users {
    admin: Admin
    professors: Professor[]
    students: Student[]
  }

  export interface Admin {
    _id: string
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
    _id: string
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

  export interface Student {
    _id: string
    picture: string
    first_name: string
    last_name: string
    full_name: string
    email: string
    is_present: boolean
    registered: string
    role: string
    phone: string
    password: string
  }