import { Injectable } from '@angular/core';
import { UserForm, UserForm1 } from 'src/app/interfaces/credentials';
import { Admin, ApiData, Professor, Student } from 'src/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiData: ApiData[] = [
    {
      "users": {
        "admin": {
          "_id": "63595b5c868ab3bb64ce06e9",
          "picture": "http://placehold.it/32x32",
          "first_name": "Kellie",
          "last_name": "Kellyham",
          "full_name": "Kris Austin",
          "email": "krisaustin@verton.com",
          "about": "Aliqua officia velit aliqua incididunt velit dolore quis sint et pariatur pariatur. Officia dolore dolor sit sit adipisicing. Nulla nulla id labore quis est cillum minim id nulla ut ad enim. Consectetur pariatur ad magna labore.\r\n",
          "role": "admin",
          "password": "",
          "registered": "2021-06-23T06:02:16 -00:00",
          "phone": "097654322567"

        },
        "professors": [
          {
            "_id": "63595b5c1da39578c6b8218b",
            "picture": "http://placehold.it/32x32",
            "first_name": "Jenifer",
            "last_name": "Rivers",
            "full_name": "Bell Grimes",
            "email": "bellgrimes@verton.com",
            "about": "Dolore commodo est consectetur reprehenderit in proident aliquip minim qui enim est est ipsum. Minim ut Lorem velit irure eu enim culpa pariatur do labore est elit fugiat. Ullamco aute occaecat do elit excepteur dolor. Sunt laboris officia labore elit do Lorem deserunt reprehenderit tempor. Nulla do anim pariatur laboris dolore. Officia adipisicing do laborum aliqua dolor ad deserunt qui veniam velit. Veniam commodo et in id consequat dolore elit non incididunt.\r\n",
            "role": "professor",
            "matters": "English",
            "password": "",
            "registered": "2017-04-29T09:03:22 -00:00",
            "phone":"0788665543434"
          },
          {
            "_id": "63595b5c234a29b9292cfa43",
            "picture": "http://placehold.it/32x32",
            "first_name": "Best",
            "last_name": "Robles",
            "full_name": "Sophia Stone",
            "email": "sophiastone@verton.com",
            "about": "Occaecat laboris minim est sint consequat. Est dolor et sit sunt ullamco dolor cupidatat veniam tempor aliqua. Irure tempor ad proident ea ut ex nulla proident eiusmod. Amet fugiat aute proident quis consectetur ullamco. Veniam amet elit excepteur occaecat ipsum dolore nisi est officia duis aliqua. Occaecat eiusmod eu ut sunt est deserunt amet. Proident nisi ipsum irure consequat ea aute ipsum dolor amet est.\r\n",
            "role": "professor",
            "matters": "English",
            "password": "",
            "registered": "2016-03-10T12:16:36 -00:00",
            "phone":"0788665543434"
          },
          {
            "_id": "63595b5ccde14d7a2344b05e",
            "picture": "http://placehold.it/32x32",
            "first_name": "Angelina",
            "last_name": "Tran",
            "full_name": "Malone Moses",
            "email": "malonemoses@verton.com",
            "about": "Consequat ipsum tempor incididunt et nisi nostrud sunt cillum. Ut voluptate consectetur deserunt commodo eu tempor elit proident. Proident Lorem in dolore amet mollit ipsum exercitation excepteur laboris veniam cillum irure do fugiat. Sunt minim sit elit reprehenderit officia aliquip veniam irure. Deserunt nulla id tempor deserunt elit commodo laboris aliquip. Duis nostrud eu sit laboris consequat culpa labore dolor esse in. Quis ad laborum velit dolore dolore irure laboris elit esse ut aliqua veniam mollit excepteur.\r\n",
            "role": "professor",
            "matters": "Computer science history",
            "password": "",
            "registered": "2014-07-21T03:43:53 -00:00",
            "phone":"0788665543434"
          },
          {
            "_id": "63595b5c775ef265d13d39e7",
            "picture": "http://placehold.it/32x32",
            "first_name": "Good",
            "last_name": "Donaldson",
            "full_name": "Witt Dennis",
            "email": "wittdennis@verton.com",
            "about": "Minim ut enim aliqua proident fugiat excepteur Lorem cupidatat excepteur. Culpa commodo elit dolore ad reprehenderit ut aliqua. Mollit laboris aliquip incididunt nostrud cillum ipsum do dolore consectetur qui enim. Irure ipsum ut mollit occaecat labore laboris anim velit sint nisi tempor. Dolore minim irure exercitation ad sit reprehenderit aute culpa dolore qui eu dolor qui.\r\n",
            "role": "professor",
            "matters": "Javascript",
            "password": "",
            "registered": "2016-01-11T10:19:23 -00:00",
            "phone":"0788665543434"
          },
          {
            "_id": "63595b5c77951417ecfe2725",
            "picture": "http://placehold.it/32x32",
            "first_name": "Lola",
            "last_name": "Lang",
            "full_name": "Johns Holder",
            "email": "johnsholder@verton.com",
            "about": "Et laboris sunt esse incididunt occaecat do id nostrud aute eu id labore consequat. Duis in consequat laborum adipisicing ipsum laborum consectetur duis ipsum ad dolor. Cupidatat reprehenderit Lorem fugiat aliqua ex culpa in amet occaecat proident adipisicing anim sunt magna.\r\n",
            "role": "professor",
            "matters": "Agile scrum",
            "password": "",
            "registered": "2019-10-15T06:23:24 -00:00",
            "phone":"0788665543434"
          },
          {
            "_id": "63595b5cf36f2ae24cb9c990",
            "picture": "http://placehold.it/32x32",
            "first_name": "Stanley",
            "last_name": "Mcfadden",
            "full_name": "Daugherty Joyce",
            "email": "daughertyjoyce@verton.com",
            "about": "Cupidatat mollit culpa reprehenderit sit eiusmod deserunt nisi est dolore ad. Tempor do ea tempor aute cillum qui voluptate minim irure proident qui laborum. Reprehenderit pariatur cillum elit aliquip do non nulla magna dolor officia anim labore incididunt.\r\n",
            "role": "professor",
            "matters": "English",
            "password": "",
            "registered": "2019-10-30T10:45:46 -00:00",
            "phone":"0788665543434"
          },
          {
            "_id": "63595b5c6f77facfc2e527a6",
            "picture": "http://placehold.it/32x32",
            "first_name": "Leila",
            "last_name": "Bartlett",
            "full_name": "Benson Graves",
            "email": "bensongraves@verton.com",
            "about": "Id velit nisi amet occaecat. Quis adipisicing nostrud pariatur ea labore id cupidatat laborum amet fugiat aliquip non irure duis. Laboris ad ullamco esse ullamco aute duis nulla ipsum laboris.\r\n",
            "role": "professor",
            "matters": "C sharp",
            "password": "",
            "registered": "2021-11-21T09:28:44 -00:00",
            "phone":"0788665543434"
          }
        ],
        "students": [
          {
            "_id": "63595b5c6b39f73a0f4b9d1a",
            "picture": "http://placehold.it/32x32",
            "first_name": "Mckenzie",
            "last_name": "Olson",
            "full_name": "Goodman Woodward",
            "email": "goodmanwoodward@verton.com",
            "is_present": true,
            "registered": "2020-05-04T03:12:36 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5c3063ead5e0ec42f5",
            "picture": "http://placehold.it/32x32",
            "first_name": "Carlene",
            "last_name": "Zamora",
            "full_name": "Anna Bradshaw",
            "email": "annabradshaw@verton.com",
            "is_present": true,
            "registered": "2016-03-22T12:32:24 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5cb1aad8ab20ee4639",
            "picture": "http://placehold.it/32x32",
            "first_name": "Lauri",
            "last_name": "Duran",
            "full_name": "Ursula Vang",
            "email": "ursulavang@verton.com",
            "is_present": true,
            "registered": "2019-05-09T02:43:50 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5c9dae1de6e2193f96",
            "picture": "http://placehold.it/32x32",
            "first_name": "Bowen",
            "last_name": "Powers",
            "full_name": "Meadows Tillman",
            "email": "meadowstillman@verton.com",
            "is_present": true,
            "registered": "2015-04-01T06:43:59 -00:00",
            "role": "professor",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5c3dfdee4d7303d1c1",
            "picture": "http://placehold.it/32x32",
            "first_name": "Merrill",
            "last_name": "Roy",
            "full_name": "Berg Mcgee",
            "email": "bergmcgee@verton.com",
            "is_present": true,
            "registered": "2020-02-06T02:43:14 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5c8a402b6d5155d29b",
            "picture": "http://placehold.it/32x32",
            "first_name": "Marcie",
            "last_name": "Reed",
            "full_name": "Karin Douglas",
            "email": "karindouglas@verton.com",
            "is_present": false,
            "registered": "2014-05-21T10:52:22 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5c4b191d8d912e56b6",
            "picture": "http://placehold.it/32x32",
            "first_name": "Mueller",
            "last_name": "Haney",
            "full_name": "Megan Ochoa",
            "email": "meganochoa@verton.com",
            "is_present": true,
            "registered": "2018-10-15T09:40:12 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5c93d828909beaa667",
            "picture": "http://placehold.it/32x32",
            "first_name": "Christa",
            "last_name": "Alvarez",
            "full_name": "Sheri Wyatt",
            "email": "sheriwyatt@verton.com",
            "is_present": true,
            "registered": "2016-07-16T07:11:59 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          },
          {
            "_id": "63595b5c75ce1ae7c68f7846",
            "picture": "http://placehold.it/32x32",
            "first_name": "Cardenas",
            "last_name": "Riley",
            "full_name": "Durham Fields",
            "email": "durhamfields@verton.com",
            "is_present": false,
            "registered": "2016-07-05T02:45:50 -00:00",
            "role": "student",
            "phone": "0977365226",
            "password": "password"
          },
          {
            "_id": "63595b5c6bc616f6514f9fa3",
            "picture": "http://placehold.it/32x32",
            "first_name": "Conley",
            "last_name": "Anderson",
            "full_name": "Leblanc Barker",
            "email": "leblancbarker@verton.com",
            "is_present": false,
            "registered": "2016-08-16T05:38:41 -00:00",
            "role": "student",
            "phone": "097878664332",
            "password": "password"
          }
        ]
      }
    }
  ]
  constructor() { }

  getStudents(): Student[] {
    return this.apiData[0].users.students;
  }

  addStudent(formData: UserForm) {
    const student: Student =  {
      _id: this.getStudents().length.toString(),
      picture: "http://placehold.it/32x32",
      first_name: formData.first_name,
      last_name: formData.last_name,
      full_name: "Megan Ochoa",
      email: formData.email,
      is_present: false,
      registered: new Date().toISOString(),
      role: "student",
      phone: formData.phone,
      password: formData.password,
    }

    this.apiData[0].users.students.push(student)
  }

  getSdudentById(id: string) {

    return this.apiData[0].users.students.find(
      (student: Student) => {

        return student._id === id
      }
    )

  }

  editStudent(id: string, formData: UserForm) {
    const student = this.getSdudentById(id)

    if (!student) {
      throw new Error(" User NotFoundComponent")
    }

    student.first_name = formData.first_name
    student.last_name = formData.last_name
    student.email = formData.email
    student.phone = formData.phone
    student.password = formData.password

  }

  deletStudent(id: string) {
    const student = this.getSdudentById(id)

    if (!student) {
      throw new Error(" User NotFoundComponent")
    }

    this.apiData[0].users.students = this.apiData[0].users.students.filter((student: Student) => student._id !== id)
    
  }

  getprofessor(): Professor[] {
    return this.apiData[0].users.professors;
  }

  addprofessor( formData1: UserForm1) {
   const professors : Professor =  {
     _id: this.getprofessor().length.toString(),
     picture: '',
     first_name: formData1.first_name,
     last_name:formData1.last_name,
     full_name: '',
     email:formData1.email,
     about: '',
     role: '',
     matters: formData1.matters,
     password: formData1.password,
     registered: '',
     phone: ''
   }
   this.apiData[0].users.professors.push(professors)
}

  getadminstrators(): Admin {
    return this.apiData[0].users.admin;
  }
}
