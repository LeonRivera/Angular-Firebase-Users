import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { LoginGuardian } from './login/login-guardian.service';
import { AppRoutingModule } from './app-routing.module';
import { LoginService } from './login.service';


// const routes: Routes = [
//   {path: '', redirectTo: '/login', pathMatch: 'full'},
//   // {path: 'directivas', component: DirectivaComponent},
//   {path: 'login', component: LoginComponent}
// ]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule,
  ],
  providers: [UserService, LoginGuardian, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
