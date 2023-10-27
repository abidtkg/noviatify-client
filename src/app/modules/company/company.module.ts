import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyDocumentsComponent } from './pages/company-documents/company-documents.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { RegisterdAgentComponent } from './pages/registerd-agent/registerd-agent.component';
import { ReceiptsComponent } from './pages/receipts/receipts.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CompanyInfoComponent } from './pages/company-info/company-info.component';
import { MatIconModule } from '@angular/material/icon';
import { ComplianceComponent } from './pages/compliance/compliance.component';
import { DomainEmailComponent } from './pages/domain-email/domain-email.component';


@NgModule({
  declarations: [
    CompanyDocumentsComponent,
    MailboxComponent,
    OrderStatusComponent,
    RegisterdAgentComponent,
    ReceiptsComponent,
    CompanyInfoComponent,
    ComplianceComponent,
    DomainEmailComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CompanyModule { }
