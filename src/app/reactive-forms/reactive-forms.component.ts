import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValid, passordValid } from './customValidtions';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  constructor(private fb: FormBuilder) {}
  // register = new FormGroup({
  //   password: new FormControl(''),
  //   username: new FormControl(''),
  //   confirmPasword: new FormControl(''),
  //   address: new FormGroup({
  //     state: new FormControl(''),
  //     country: new FormControl(''),
  //     city: new FormControl(''),
  //     PostalCode: new FormControl(''),
  //   }),
  // });
  // register = this.fb.group({
  //   password: this.fb.control(''),
  //   username: this.fb.control(''),
  //   confirmPasword: this.fb.control(''),
  //   address: this.fb.group({
  //     state: this.fb.control(''),
  //     country: this.fb.control(''),
  //     city: this.fb.control(''),
  //     PostalCode: this.fb.control(''),
  //   }),
  // });
  fobReg: RegExp = /admin/;
  register = this.fb.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          CustomValid(this.fobReg),
        ],
      ],
      password: [''],
      confirmPasword: [''],
      email: [''],
      AltrEmail: this.fb.array([]),
      subscribe: [false],
      address: this.fb.group({
        state: [''],
        country: [''],
        city: [''],
        PostalCode: [''],
      }),
    },
    { validators: [passordValid] }
  );
  OnSubmit() {
    console.log(this.register);
  }
  get userName() {
    return this.register.get('username');
  }
  OnSetEmailRequired() {
    this.register.get('subscribe')?.valueChanges.subscribe((ele) => {
      console.log(ele);
      const email = this.OnControl('email');
      if (ele) {
        email?.setValidators(Validators.required);
      } else email?.clearValidators();
      email?.updateValueAndValidity();
    });
  }
  OnLoadData() {
    this.register.setValue({
      username: 'ishak',
      email: '',
      subscribe: false,
      password: 'password',
      confirmPasword: 'confirmPasword',
      AltrEmail:[],
      address: {
        state: 'state',
        city: 'cairo',
        country: 'egypt',
        PostalCode: '11311',
      },
    });
  }
  OnRest() {
    this.register.reset();
  }
  OnControl(name: string) {
    return this.register.get(name);
  }
 get AltrEmails() {
    return this.register.get('AltrEmail') as FormArray;
  }
  OnAddNewEmail(){
    this.AltrEmails.push(this.fb.control(''));
  }
  OnDeletewEmail(index:number){
    this.AltrEmails.removeAt(index)
  }
}
