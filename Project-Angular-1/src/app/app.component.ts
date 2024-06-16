import { Component } from '@angular/core';

import {LayoutComponent} from "./layout/layout.component";
import {CommonModule} from "@angular/common";



@Component({
  selector: 'app-root',
  standalone:true,
  imports:[LayoutComponent,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Project-Angular-1';
}
