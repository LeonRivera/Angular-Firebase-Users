import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

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

  delete(user:User):void{


    console.log("eliminando a :" + user);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })


    swalWithBootstrapButtons.fire({
      title: 'Esta seguro?',
      text: `Seguro que desea eliminar a ${user.username}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.delete(user).subscribe(
          res => {

            //filter the client that we eliminated and update the list
            this.users = this.users.filter(u => u !== user);

            swalWithBootstrapButtons.fire(
              'Eliminado!',
              `Se ha eliminado a ${user.username} correctamente`,
              'success'
            )
          }
        )
      }
      // } else if (
      //   /* Read more about handling dismissals below */
      //   result.dismiss === Swal.DismissReason.cancel
      // ) {
      //   swalWithBootstrapButtons.fire(
      //     'Cancelled',
      //     'Your imaginary file is safe :)',
      //     'error'
      //   )
      // }
    })
    
   
  }

  update(user:User):void{
    console.log("actualizand: "+user);
  }

}
