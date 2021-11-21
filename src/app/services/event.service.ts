import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { EventInterface } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    private http: HttpClient
  ) { }

  getEvents(): Observable<EventInterface[]> {
    return this.http.get<EventInterface[]>('https://medicel.azurewebsites.net/api/GetEvents')
  }

  getEventById(eventId: string): Observable<any> {
    return this.http
      .get<any>('https://medicel.azurewebsites.net/api/getEventsById/' + eventId)
      .pipe(
        catchError(error => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
          } else {
            errorMsg = `Error: ${error.error}`;
          }

          return throwError(errorMsg);
        })
      );
  }

  postEvent(event: EventInterface): Observable<any> {
    return this.http.post<any>('https://medicelpro.azurewebsites.net/api/CreateEvent', event)
  }

}
