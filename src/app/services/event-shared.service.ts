import { Injectable } from '@angular/core';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventSharedService {

  private _eventData: Event = {
    name: "",
    description: "",
    cover: "",
    address: "",
    date: "",
    hour: "",
    type: ""
  }

  private _eventType = ""

  get eventData() {
    return this._eventData
  }

  set eventData(data: Event) {
    this._eventData = data
  }

  get eventType() {
    return this._eventType
  }

  set eventType(type: string) {
    this._eventType = type
  }
}