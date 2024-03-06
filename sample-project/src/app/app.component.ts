import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login-component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [AuthService],
  imports: [NgIf, NgFor, LoginComponent, HttpClientModule],
  template: `
    <div style="margin-bottom: 20px">
      <button (click)="logout()">Logout</button>
    </div>
    <app-login></app-login>
  `,
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
