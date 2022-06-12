import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public activatedMenu:boolean = false;

  constructor(private userService:UserService,
    private router:Router,
    private loginService:LoginService) { }

  ngOnInit(): void {
  }


  logout():void{
    console.log("logout");
    this.loginService.logout();
  }

  activateMenu():void{
    

    if(!this.activatedMenu){
      this.activatedMenu = true;
    }else{
      this.activatedMenu = false;
    }

    console.log(this.activatedMenu);
  }
}
