import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.sass']
})
export class SearchBarComponent {
  @Output() inputValueChange = new EventEmitter<string>();
  inputValue: string = '';

  searchInput() {
    console.log(this.inputValue);
  }
}
