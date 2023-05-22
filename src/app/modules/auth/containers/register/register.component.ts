import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
public fGroup!: FormGroup
public error!:string

constructor(private formBuilder: FormBuilder,private authService: AuthService, private router:Router){

}

ngOnInit() {
  this.fGroup = this.formBuilder.group({
    name:  ['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })
}



public onSubmit(){
  console.log(this.fGroup);
  
  let userData = this.fGroup.getRawValue()

  this.authService.registerUser(userData).subscribe(()=> this.router.navigate(['/']), (err)=>this.error = err.error.message)
}
}
