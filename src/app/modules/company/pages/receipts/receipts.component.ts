import { Component } from '@angular/core';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent {
  displayedColumns: string[] = ['cname', 'orderno', 'ordertype', 'amount', 'receipt', 'orderdate', 'status'];

  public dataSource = [{
    state: 'NOVIATIFY INC.',
    doctype: 'Virtual Address Notification',
    recvdate: 'Oct. 17, 2023',
    status: 'Unread',
  }, 
 ]
}
