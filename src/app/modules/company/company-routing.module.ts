import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDocumentsComponent } from './pages/company-documents/company-documents.component';

const routes: Routes = [
  { path: 'documents/:companyid', component: CompanyDocumentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
