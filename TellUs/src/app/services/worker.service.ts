import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor() { }

  public notificationData = new BehaviorSubject<any>([]);
}
