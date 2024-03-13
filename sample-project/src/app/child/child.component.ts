import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() text: string;
  @Output() textChanged$ = new EventEmitter<string>();

  changeText() {
    this.textChanged$.emit(this.text.toUpperCase());
  }
}
