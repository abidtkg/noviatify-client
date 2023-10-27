import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IRegister } from '../../interfaces/auth.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    
    public name: string = '';
    public email: string = '';
    public password: string = '';
    public repeat_password: string = '';
    
    constructor(
        private Title: Title,
        private SnackBar: MatSnackBar,
        private Auth: AuthService,
        private Router: Router
    ){}
    
    ngOnInit(): void {
        this.Title.setTitle('Register - Noviatify');
    }
    
    register(){
        if(this.password != this.repeat_password) {
            this.SnackBar.open('Passowrd not matched!', 'Close');
            return ;
        }

        const user: IRegister = {
            name: this.name,
            email: this.email,
            password: this.password
        }

        this.Auth.register(user)
        .subscribe({
            next: (data) => {
                this.SnackBar.open('Register success!', 'Close');
                this.Router.navigate(['/auth/login']);
            },
            error: (error) => {
                this.SnackBar.open(error.error.error, 'Close');
            }
        });
    }

}
