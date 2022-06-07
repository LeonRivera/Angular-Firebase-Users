import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  constructor(private userService:UserService
    ) { }

  ngOnInit(): void {
    console.log("user:"+ this.userService.usuario.username);
    this.userService.getUsers().subscribe(users => this.users = users);
  }

}
