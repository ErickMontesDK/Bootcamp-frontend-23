import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports:[
    NavbarComponent,
    SearchBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
