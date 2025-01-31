import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class AntragsdatenService {

  constructor(private httpClient: HttpClient, private matSnackBar: MatSnackBar) {

  }

  getAntraegById(id): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'antraege?id=' + id)
      .pipe(catchError(this.handleError));
  }

  getAllAntraege(): Observable<any> {
    return this.httpClient.get<any>(baseUrl + 'antraege')
      .pipe(catchError(this.handleError));
  }

  getAvaStatus(currentStatus): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'status?currentStatus=' + currentStatus)
      .pipe(catchError(this.handleError));
  }

  getAntraegeByUsername(username): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'antraege?beantrager=' + username)
      .pipe(catchError(this.handleError));
  }

  getAntraegeByStatus(status): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'antraege?projektstatus=' + status)
      .pipe(catchError(this.handleError));
  }

  getAntraegeByUsernameStatus(username, status): Observable<any> {
    return this.httpClient.get<any>(
      baseUrl + 'antraege?beantrager=' + username + '&projektstatus=' + status)
      .pipe(catchError(this.handleError));
  }

  putAntrag(antragsdaten): Observable<any> {
    return this.httpClient.put<any>(baseUrl + 'antraege/' + antragsdaten.id, antragsdaten, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json'
    })
      .pipe(catchError(this.handleError));
  }

  getStatusAccess(projektdauer): Observable<any> {
    return this.httpClient.get<any>(baseUrl + 'statusRoleAccess?klassifizierung=' + projektdauer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json'
    })
      .pipe(catchError(this.handleError));
  }

  checkIfProjektExistis(titel): Observable<any> {
    return this.httpClient.get<any>(baseUrl + 'antraege?projekttitel=' + titel, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json'
    })
      .pipe(catchError(this.handleError));
  }

  deleteAntrag(id): Observable<any> {
    return this.httpClient.delete<any>(baseUrl + 'antraege/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json'
    })
      .pipe(catchError(this.handleError));
  }

  postAntrag(antragsdaten): Observable<any> {
    return this.httpClient.post<any>(baseUrl + 'antraege', antragsdaten, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      responseType: 'text' as 'json'
    })
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
