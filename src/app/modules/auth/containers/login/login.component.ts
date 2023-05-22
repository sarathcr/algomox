import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public fGroup!: FormGroup;
  public error!: string;
  private subs = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  // OnInit - create form instance
  ngOnInit(): void {
    this.fGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  //Public Fn - login user and redirect to dashboard
  public onSubmit() {
    let userData = this.fGroup.getRawValue();
    this.subs.add(
      this.authService.logIn(userData).subscribe(
        () => {
          this.router.navigate(['/dashboard']);
        },
        (err) => (this.error = err.error.message)
      )
    );
  }

  // Unsubscribe all subscriptions on destroy lifecycle
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
