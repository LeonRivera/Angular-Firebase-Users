import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  responseBoolean: boolean;
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, 
    private router: Router,
    private loginService: LoginService) {}

  ngOnInit(): void {
    console.log("token login component: "+this.userService.token);
    if(sessionStorage.getItem('logged') === 'true'){
      this.router.navigate(['users']);
    }
  }

  public logIn(): void {
    console.log(this.username);
    console.log(this.password);

    // this.userService
    //   .authenticate(this.username, this.password)
    //   .subscribe((response) => {
    //     console.log(response);

    //     if (response === true) {
    //       this.router.navigate(['users']);
    //     }
    //   });

    this.loginService.authenticate(this.username, this.password);
  }
}
