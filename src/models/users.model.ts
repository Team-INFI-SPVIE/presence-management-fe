export interface ApiData {
    users: Users
  }

  export interface Users {
    admin: Admin
    professors: Professor[]
    students: Student[]
    presences: Presence[]
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

  export class Student {
    _id!: string
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

  export interface Presence {
    _id: string
    createdAt: Date
    studentsPresenses: StudentsPresenses[]
  }

  export class StudentsPresenses {
    _id!: string
    first_name!: string
    last_name!: string
    email!: string
    is_present!: boolean
    role?: string
    phone?: string
    matter!: string
    startTime!: string
    endTime!: string
  }
