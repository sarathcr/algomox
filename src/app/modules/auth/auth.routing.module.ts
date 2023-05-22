import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { RegisterComponent } from './containers/register/register.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    
    // canActivate: [AuthGuard],
    component: LoginComponent,
    
  },
  {
    path: 'register',
    
    // canActivate: [AuthGuard],
    component: RegisterComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
