import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { SampleService } from './app.service';
import { NgFor, NgIf } from '@angular/common';
import { Role, User } from './app.interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [SampleService],
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
  readonly ROLE = Role;
  private user = this.sampleService.getUser();
  users: User[] = [];

  constructor(private sampleService: SampleService) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.users = this.sampleService.getUsers();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
