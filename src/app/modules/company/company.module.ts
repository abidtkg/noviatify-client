import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyDocumentsComponent } from './pages/company-documents/company-documents.component';
import { MailboxComponent } from './pages/mailbox/mailbox.component';
import { OrderStatusComponent } from './pages/order-status/order-status.component';
import { RegisterdAgentComponent } from './pages/registerd-agent/registerd-agent.component';
import { ReceiptsComponent } from './pages/receipts/receipts.component';


@NgModule({
  declarations: [
    CompanyDocumentsComponent,
    MailboxComponent,
    OrderStatusComponent,
    RegisterdAgentComponent,
    ReceiptsComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
