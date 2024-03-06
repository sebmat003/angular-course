import { AuthService } from '../auth.service';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  template: `
    <form [formGroup]="loginForm">
      <h1>Log In</h1>
      <input type="text" placeholder="Username" formControlName="username" />
      <input
        type="password"
        placeholder="Password"
        formControlName="password"
      />
      <button (click)="onSubmit()">Submit</button>
    </form>
  `,
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    const {
      username: { value: username },
      password: { value: password },
    } = this.loginForm.controls;
    this.authService.login(username, password).subscribe(() => {
      // redirect to the page
    });
  }
}
