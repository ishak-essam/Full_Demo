import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  filterStatus: string;
  BehaviorSubject = new BehaviorSubject<number>(23);
  SubjectStatus = new BehaviorSubject<number>(22);
  ObservableStatus = new Observable<number>((e) => e.next(21));
  servers = [
    {
      instanceType: 'meduim',
      name: 'deployment',
      budget: '1000',
      LoadTime: '.3',
      status: 'stable',
      started: new Date(20, 1, 2020),
    },
    {
      instanceType: 'large',
      name: 'User Database',
      LoadTime: '1',
      budget: '2000',
      status: 'stable',
      started: new Date(20, 1, 2021),
    },
    {
      instanceType: 'large',
      name: 'development ',
      budget: '2000',
      LoadTime: '1.3',
      status: 'offline',
      started: new Date(20, 1, 2022),
    },
    {
      instanceType: 'large',
      name: 'User testing',
      status: 'stable',
      budget: '3000',
      LoadTime: '2.3',
      started: new Date(20, 1, 2023),
    },
  ];
  getStatus(server: {
    instanceType: string;
    name: string;
    status: string;
    budget: string;
    LoadTime: string;
    started: Date;
  }) {
    return {
      'list-group-item-success': server.status == 'stable',
      'list-group-item-warning': server.status == 'offline',
      'list-group-item-danger': server.status == 'critical',
    };
  }
  AddServer() {
    this.servers.push({
      instanceType: 'small',
      name: 'add testing',
      status: 'stable',
      budget: '3000',
      LoadTime: '2.3',
      started: new Date(20, 1, 2024),
    });
  }
}
