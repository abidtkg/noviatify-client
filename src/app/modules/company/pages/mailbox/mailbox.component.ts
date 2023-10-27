import { Component } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent {

  displayedColumns: string[] = ['state', 'doctype', 'recvdate', 'status', 'action'];

  public dataSource = [{
    state: 'Montana',
    doctype: 'Virtual Address Notification',
    recvdate: 'Oct. 17, 2023',
    status: 'Unread',
  }, 
 ]

}
