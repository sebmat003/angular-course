import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { SampleService } from './app.service';
import {
  AsyncPipe,
  NgFor,
  NgIf,
  NgTemplateOutlet,
  UpperCasePipe,
} from '@angular/common';
import { Role, User } from './app.interfaces';
import { BehaviorSubject, Subject, Subscription, take, takeUntil } from 'rxjs';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [SampleService],
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    UpperCasePipe,
    NgTemplateOutlet,
    ChildComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy
{
  readonly ROLE = Role;
  users: User[] = [];
  sampleService = inject(SampleService);
  products: any;
  destroy$ = new Subject<void>();
  subcription: Subscription;

  private user = this.sampleService.getUser();

  ngOnInit() {
    this.users = this.sampleService.getUsers();

    this.subcription = this.sampleService
      .getProducts()
      .subscribe((products) => {
        this.products = products;
      });
  }

  getText(text: string) {
    console.log(text);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.subcription.unsubscribe();
  }
}
