import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css',
})
export class AlertComponent {
  @Input() message: string;
  @Output() closeBtn = new EventEmitter<void>();
  CloseBtn() {
    this.closeBtn.emit();
  }
}
