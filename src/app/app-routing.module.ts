import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardian } from './login/login-guardian.service';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component:UsersComponent, canActivate:[LoginGuardian]},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent, canActivate:[LoginGuardian]}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
