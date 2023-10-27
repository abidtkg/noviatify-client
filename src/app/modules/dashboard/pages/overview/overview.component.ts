import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  displayedColumns: string[] = ['name', 'state', 'orderid', 'email', 'status', 'action'];

  public dataSource = [{
    name: 'ABID INC',
    state: 'LA',
    orderid: '455822',
    email: 'abid@abid.com',
    status: 'Processing',
  }, 
  {
    name: 'Mechanics Ltd',
    state: 'FL',
    orderid: '5658565',
    email: 'info@abidh.com',
    status: 'Completed',
  }]

}
