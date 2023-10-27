import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/app/app.config';
import { ILogin, ILoginRes, IRegister } from '../interfaces/auth.interface';
import { Observable, throwError, catchError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private server: string = server;
    
    constructor(
        private http: HttpClient
    ) { }

    login(user: ILogin): Observable<ILoginRes> {
        return this.http.post<ILoginRes>(`${this.server}/client/login`, user)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    register(user: IRegister): Observable<{message: string}> {
        return this.http.post<{message: string}>(`${this.server}/client/register`, user)
        .pipe(
            catchError(this.errorHandeller)
        );
    }

    loggedIn() {
        return !!localStorage.getItem('token');
    }

    errorHandeller(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}
