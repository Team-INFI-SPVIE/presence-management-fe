import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/credentials';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: Credentials = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  }

//   {
//     "email": "eve.holt@reqres.in",
//     "password": "cityslicka"
// }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.authService.login(this.form).subscribe(
      (data: any) => {
        console.log(data)
        // localStorage.setItem('token', data.token)
        this.tokenService.saveToken(data.token)
        this.router.navigate(['admin'])
      },
      (err: any) => console.log(err),
    )
  }

}
