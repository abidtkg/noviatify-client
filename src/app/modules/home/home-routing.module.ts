import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StartcompanyComponent } from './pages/startcompany/startcompany.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'start-company', component: StartcompanyComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
