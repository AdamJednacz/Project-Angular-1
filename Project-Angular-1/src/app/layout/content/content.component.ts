import { Component } from '@angular/core';
import {TableComponent} from "./table/table.component";

@Component({
  selector: 'app-content',
  standalone:true,
  imports:[TableComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

}
