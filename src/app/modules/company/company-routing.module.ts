import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDocumentsComponent } from './pages/company-documents/company-documents.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { RegisterdAgentComponent } from './pages/registerd-agent/registerd-agent.component';
import { ReceiptsComponent } from './pages/receipts/receipts.component';
import { ComplianceComponent } from './pages/compliance/compliance.component';
import { DomainEmailComponent } from './pages/domain-email/domain-email.component';

const routes: Routes = [
  { path: 'documents/:companyid', component: CompanyDocumentsComponent },
  { path: 'mailbox/:companyid', component: MailboxComponent },
  { path: 'order-status/:companyid', component: OrderStatusComponent },
  { path: 'info/:companyid', component: CompanyInfoComponent },
  { path: 'agents/:companyid', component: RegisterdAgentComponent },
  { path: 'order-history/:companyid', component: ReceiptsComponent },
  { path: 'state-requirement/:companyid', component: ComplianceComponent },
  { path: 'domain-and-email/:companyid', component: DomainEmailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
