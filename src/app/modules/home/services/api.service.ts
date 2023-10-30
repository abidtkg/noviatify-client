import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { server } from 'src/app/app.config';
import { IState } from '../interfaces/api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private server: string = server;

  constructor(
    private http: HttpClient
  ) { }

  packages(): Observable<any> {
    return this.http.get<any>(`${this.server}/package/web/packages`)
    .pipe(
      catchError(this.errorHandeller)
    );
  }

  states(): Observable<IState[]> {
    return this.http.get<IState[]>(`${this.server}/state/web/states`)
    .pipe(
      catchError(this.errorHandeller)
    );
  }

  errorHandeller(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
