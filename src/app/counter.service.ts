import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count = signal(0);
  readonly counter = this.count.asReadonly();
  constructor() {}
  increment() {
    console.log(this.count() > 10)
    if (this.count() <10) {
      console.log(this.count() > 10)
      return this.count.update((value) => value + 1);
    }
    else{
      throw "error increment"
    }
  }
}
