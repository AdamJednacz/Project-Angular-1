import { Component } from '@angular/core';
import {ButtonsComponent} from "./buttons/buttons.component";

@Component({
  selector: 'app-sidenav',
  standalone:true,
  imports:[ButtonsComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
