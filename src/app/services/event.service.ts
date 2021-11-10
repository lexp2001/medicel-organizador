import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('https://medicel.azurewebsites.net/api/GetEvents')
  }

  // getParticipantByRut(rut: string): Observable<any> {
  //   return this.http
  //     .get<any>('https://medicelpro.azurewebsites.net/api/getParticipantByRut/' + rut)
  //     .pipe(
  //       catchError(error => {
  //         let errorMsg: string;
  //         if (error.error instanceof ErrorEvent) {
  //           errorMsg = `Error: ${error.error.message}`;
  //         } else {
  //           errorMsg = `Error: ${error.error}`;
  //         }

  //         return throwError(errorMsg);
  //       })
  //     );
  // }

}
