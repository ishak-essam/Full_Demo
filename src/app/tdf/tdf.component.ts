import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrl: './tdf.component.css',
})
export class TdfComponent {
  @ViewChild('register', { static: true }) registerForm: NgForm;
  QuAs: string;
  DefulatQuestiton = 'teacher';
  genders = ['male', 'female'];
  onSubmit(register: NgForm) {
    console.log(register);
    console.log(this.DefulatQuestiton);
    // this.registerForm.reset()
    this.registerForm.resetForm()
  }
  suggestName() {
    const usernameSuggest = 'ishak';
    this.registerForm.form.patchValue({
      userdata: {
        username: usernameSuggest,
      },
    });
  }
}
