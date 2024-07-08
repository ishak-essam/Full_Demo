import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  error: string | null;
  raiseError() {
    this.error = 'error occured in typescript';
  }
  OncloseBtn() {
    this.error = null;
  }
}
