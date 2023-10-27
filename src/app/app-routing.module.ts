import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then( module => module.AuthModule) },
    { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then( module => module.DashboardModule ), canActivate: [AuthGuard] },
    { path: 'company', loadChildren: () => import('./modules/company/company.module').then( module => module.CompanyModule ) },
    { path: '', loadChildren: () => import('./modules/home/home.module').then( module => module.HomeModule )  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
