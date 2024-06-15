import { NgModule } from '@angular/core';
import {ContentComponent} from "./content/content.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {LayoutComponent} from "./layout.component";
import {TableComponent} from "./content/table/table.component";

@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent,
    SidenavComponent,
    TopbarComponent,
    SearchBarComponent,
  ],
  imports: [
    TableComponent
 ],
  exports: [ContentComponent],
})
export class LayoutModule {

}
