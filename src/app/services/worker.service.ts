import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Worker as WorkerInterface } from '../interfaces/worker.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(
    private http: HttpClient
  ) { }
  
  getWorkers(): Observable<WorkerInterface[]> {
    return this.http.get<WorkerInterface[]>('https://medicel.azurewebsites.net/api/GetWorkers')
  }
  
}
