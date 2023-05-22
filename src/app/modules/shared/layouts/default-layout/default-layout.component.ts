import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth-service.service';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  public userData!: User;
  public error!: string;
  private subs = new Subscription();
  constructor(
    private userServie: UserService,
    private authService: AuthService,
    public router: Router
  ) {}
  ngOnInit() {
    this.subs.add(
      this.userServie.getUser().subscribe(
        (res: User) => {
          this.userData = res;
        },
        (err: string) => (this.error = err)
      )
    );
  }

  public logout() {
    this.subs.add(
      this.authService.logout().subscribe(
        (res) => {
          this.router.navigate(['/auth/login']);
        },
        (err) => console.log(err)
      )
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
