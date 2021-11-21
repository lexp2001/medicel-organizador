import { Injectable } from '@angular/core';
import { EventInterface } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventSharedService {

  private _eventData: EventInterface = {
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

  set eventData(data: EventInterface) {
    this._eventData = data
  }

  get eventType() {
    return this._eventType
  }

  set eventType(type: string) {
    this._eventType = type
  }
}