import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public fGroup!: FormGroup;
  public error!: string;
  private subs = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  // OnInit Hook, Define form instances here
  ngOnInit() {
    this.fGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  // PUBLIC FN to register user and navigate to dashboard
  public onSubmit() {
    let userData = this.fGroup.getRawValue();
    this.subs.add(
      this.authService.registerUser(userData).subscribe(
        () => this.router.navigate(['/']),
        (err) => (this.error = err.error.message)
      )
    );
  }

  // Unsubscribe all subscriptions on destroy lifecycle
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
