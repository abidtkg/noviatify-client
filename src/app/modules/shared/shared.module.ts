import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DashSidebarComponent } from './layouts/dash-sidebar/dash-sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CompanySidebarComponent } from './layouts/company-sidebar/company-sidebar.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    DashSidebarComponent,
    CompanySidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    DashSidebarComponent,
    CompanySidebarComponent
  ]
})
export class SharedModule { }
