import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: []
})
export class CounterComponent {
  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  onIncrement(): void {
    this.value++;
    this.valueChange.emit(this.value);
  }
  onDecrement(): void {
    this.value--;
    this.valueChange.emit(this.value);
  }

}
