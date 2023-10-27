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
    CompanyRoutingModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class CompanyModule { }
