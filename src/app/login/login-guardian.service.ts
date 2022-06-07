import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";
import { UserService } from "../user.service";

@Injectable()
export class LoginGuardian implements CanActivate{
    constructor(private userService:UserService, 
        private router:Router,
        private loginService:LoginService){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // if(this.loginService.isAuth()){
        //     console.log("en guardian:"+this.loginService.isAuth());
        //     return true;
        // }else{
        //     this.router.navigate(['login']);
        //     return false;
        // }


        if(sessionStorage.getItem('logged') === 'true'){
            console.log("en guardian is auth:"+this.loginService.isAuth());
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }
}