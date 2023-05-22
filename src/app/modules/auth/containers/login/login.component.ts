import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public fGroup!: FormGroup
  public error!:string

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router:Router){}
ngOnInit(): void {
  this.fGroup = this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })
}
  public onSubmit(){
    let userData = this.fGroup.getRawValue()

    this.authService.logIn(userData).subscribe(()=> {this.router.navigate(['/dashboard'])}, (err)=>this.error = err.error.message)
  }
}
