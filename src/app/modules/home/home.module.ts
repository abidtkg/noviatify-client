import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { StartcompanyComponent } from './pages/startcompany/startcompany.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';


@NgModule({
  declarations: [
    HomeComponent,
    StartcompanyComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
