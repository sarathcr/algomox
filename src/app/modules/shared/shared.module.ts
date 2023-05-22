import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SharedComponent } from './shared.component';
import { SharedRoutingModule } from './shared.routing.module';
import { FormsModalComponent } from './components/forms-modal/forms-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    DashboardComponent,
    SharedComponent,
    DefaultLayoutComponent,
    AuthLayoutComponent,
    TableComponent,
    FormsModalComponent,
  ],
  imports: [CommonModule, SharedRoutingModule, ReactiveFormsModule],
  exports: [AuthLayoutComponent],
  // providers:[AuthGuard]
})
export class SharedModule {}
