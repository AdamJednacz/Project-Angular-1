import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonsComponent {
  @Output() viewChange = new EventEmitter<string>();

  changeView(view: string) {
    this.viewChange.emit(view);
  }
}
