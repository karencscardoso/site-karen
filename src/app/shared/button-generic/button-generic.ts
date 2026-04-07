import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-generic',
  imports: [
    MatButtonModule,
  ],
  templateUrl: './button-generic.html',
  styleUrl: './button-generic.scss',
})
export class ButtonGeneric {
  @Input() label: string = '';
  @Output() btnClick = new EventEmitter<void>();

  onClick() {
    this.btnClick.emit();
  }
}
