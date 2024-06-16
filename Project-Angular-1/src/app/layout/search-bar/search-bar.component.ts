import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

/**
 * @title Input with hints
 */
@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrl: 'search-bar.component.scss',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class SearchBarComponent {

}
