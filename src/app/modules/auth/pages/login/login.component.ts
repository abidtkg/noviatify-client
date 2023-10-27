import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILogin } from '../../interfaces/auth.interface';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { appName } from 'src/app/app.config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public email: string = '';
    public password: string = '';

    constructor(
        private Auth: AuthService,
        private SnackBar: MatSnackBar,
        private Router: Router,
        private Title: Title
    ){}

    ngOnInit(): void {
        this.Title.setTitle(`Login - ${appName}`);
    }

    login(){
        const user: ILogin = {
            email: this.email,
            password: this.password
        }

        this.Auth.login(user)
        .subscribe({
            next: (data) => {
                this.SnackBar.open('Logged in', 'Close');
                localStorage.setItem('token', data.token);
                this.Router.navigate(['/dashboard/overview']);
            },
            error: (error) => {
                this.SnackBar.open(error.error.error, 'Close');
            }
        });
    }
}
