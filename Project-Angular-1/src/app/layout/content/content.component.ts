import { Component } from '@angular/core';
import {DashboardComponent} from "./dashboard/dashboard.component";

@Component({
  selector: 'app-content',
  standalone:true,
  imports:[DashboardComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
