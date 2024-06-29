import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  ActiveEmitter = new EventEmitter<boolean>(false);
  ActiveSubject = new Subject<boolean>();
  constructor() { }
}
