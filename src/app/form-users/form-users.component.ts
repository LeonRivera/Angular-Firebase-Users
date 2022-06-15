import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.css']
})
export class FormUsersComponent implements OnInit {


  // public username:string;
  // public password:string;
  // public age:number;

  public user:User = new User();

  public updatingUser:boolean = false;

  constructor(private userService:UserService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.updatingUser=this.loadUserParam();
    console.log(this.updatingUser);
  }

  public loadUserParam():boolean{
    let username = "";
    this.activatedRoute.params.subscribe(params => {
      username = params['username'];

      console.log(username);
      if(username){
        this.userService.getByUsername(username).subscribe(
          user => this.user = user
        )
          console.log("1");
      }else{
        console.log("2");
      }
    })

    console.log(username);
    if(username === undefined){
      console.log("3");
      return false;
    }else{
      console.log("4");
      return true;
    }
  }

  create():void{
    console.log("creating");
    this.userService.create(this.user).subscribe(
      res => {
        this.router.navigate(['users']);
        Swal.fire('User created', '', 'success');
      }
    );
  }

  update():void{
    console.log("updating");
    this.userService.update(this.user).subscribe(
      res=>{
        this.router.navigate(['/users']);
        Swal.fire('User updated', '', 'success');
      }
    );
  }

}
