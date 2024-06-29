import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, map, Subscription } from 'rxjs';
import { ServicesService } from '../serivce/services.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit, OnDestroy {
  id: number;
  Obs: Subscription;

  constructor(
    private activedRoute: ActivatedRoute,
    private service: ServicesService
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe((ele: Params) => {
      this.id = ele['id'];
    });
    // interval(1000).subscribe((ele) => {
    //   console.log(ele);
    // });
    const observeTest = new Observable((ob) => {
      let count = 0;
      setInterval(() => {
        if (count == 10) ob.complete();
        // if (count >= 5) ob.error('count is 3');
        ob.next(count);

        count++;
      }, 700);
    });
    // this.Obs = interval(1000).subscribe((ele) => {
    //   console.log(ele);
    // });
    this.Obs = observeTest
      .pipe(
        map((ele: any) => {
          return 'ele ' + (ele + 1);
        })
      )
      .subscribe(
        (ele) => console.log(ele),
        (ele) => console.log(ele)
      );
    this.Obs = observeTest.subscribe({
      next: (ele) => console.log(ele),
      error: (ele) => console.log(ele),
      complete: () => console.log('complete'),
    });
  }
  ngOnDestroy(): void {
    this.Obs.unsubscribe();
  }
  OnActived() {
    // this.service.ActiveEmitter.emit(true);
    this.service.ActiveSubject.next(true);
  }
  OnDeActived() {
    // this.service.ActiveEmitter.emit(false);
    this.service.ActiveSubject.next(false);
  }
}
