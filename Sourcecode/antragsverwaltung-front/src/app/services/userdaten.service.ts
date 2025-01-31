import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserdatenService {

  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar) {
  }

  postUser(userdata): Observable<any> {
    return this.httpClient.post<any>(baseUrl + 'user', userdata, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json'
    })
      .pipe(catchError(this.handleError));
  }

  getUser(username): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'user?username=' + username)
      .pipe(catchError(this.handleError));
  }

  getBereichsleiter(): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'user?role=bereichsleiter')
      .pipe(catchError(this.handleError));
  }

  putUser(userdata): Observable<any> {
    return this.httpClient.put<any>(baseUrl + 'user/' + userdata.id, userdata, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json'
    })
      .pipe(catchError(this.handleError));
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete<any>(
      baseUrl + 'user/' + id)
      .pipe(catchError(this.handleError));
  }

  getAllUser(): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'user')
      .pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    this.matSnackBar.open('Es kam zu einem Fehler', 'OK');
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError(errorResponse);
  }
}
