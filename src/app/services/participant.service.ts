import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../interfaces/participant.interface';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor(
    private http: HttpClient
  ) { }
    
  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>('https://medicel.azurewebsites.net/api/GetParticipants')
  }
  
}