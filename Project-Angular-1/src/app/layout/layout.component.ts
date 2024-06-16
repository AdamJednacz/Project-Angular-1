import { Component } from '@angular/core';
import {ContentComponent} from "./content/content.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";

@Component({
  selector: 'app-layout',
  standalone:true,
  imports:[
    ContentComponent,
    SidenavComponent,
    TopbarComponent,
    SearchBarComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
