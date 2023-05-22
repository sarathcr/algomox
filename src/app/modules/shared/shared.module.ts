import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared.routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SharedComponent,
    DefaultLayoutComponent,
    AuthLayoutComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule, ReactiveFormsModule
  ],
  exports: [AuthLayoutComponent],
  // providers:[AuthGuard]
})
export class SharedModule { }
