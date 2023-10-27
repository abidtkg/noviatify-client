import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../../dialogs/confirmation/confirmation.component';

@Component({
    selector: 'app-company-sidebar',
    templateUrl: './company-sidebar.component.html',
    styleUrls: ['./company-sidebar.component.scss']
})
export class CompanySidebarComponent {

    constructor(
        private Router: Router,
        private SnackBar: MatSnackBar,
        private Dialog: MatDialog
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
