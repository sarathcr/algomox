import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from 'src/app/modules/auth/services/auth-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  public userData!: User
  public error!: string
  constructor(private userServie: UserService, private authService:AuthService, public router:Router){

  }
  ngOnInit(){
    this.userServie.getUser().subscribe((res:User) => {
      this.userData = res
    },(err:string)=> this.error = err)
  }

  public logout(){
this.authService.logout().subscribe((res)=> {this.router.navigate(['/auth/login'])}
,(err)=> console.log(err)
)
  }
}
