import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDocumentsComponent } from './pages/company-documents/company-documents.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';

const routes: Routes = [
  { path: 'documents/:companyid', component: CompanyDocumentsComponent },
  { path: 'mailbox/:companyid', component: MailboxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
