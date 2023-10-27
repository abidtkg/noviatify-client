import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../dialogs/confirmation/confirmation.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-dash-sidebar',
    templateUrl: './dash-sidebar.component.html',
    styleUrls: ['./dash-sidebar.component.scss']
})
export class DashSidebarComponent {
    
    constructor(
        private Router: Router,
        private Dialog: MatDialog,
        private SnackBar: MatSnackBar
    ){}
    
    private breakpointObserver = inject(BreakpointObserver);
    
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
        map(result => result.matches),
        shareReplay()
    );
    
    logOut(){
        const dialogRef = this.Dialog.open(ConfirmationComponent, {
            disableClose: true,
            data: {message: 'Are you sure you want to logout?'}
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result == true) {
                localStorage.clear();
                this.SnackBar.open('Logged Out', 'Close');
                this.Router.navigate(['/auth/login']);
            }
        })
    }
}
