import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { StartcompanyComponent } from './pages/startcompany/startcompany.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ApiService } from './services/api.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    StartcompanyComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  providers: [
    ApiService
  ]
})
export class HomeModule { }
