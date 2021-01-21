import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  input: string;

  constructor() { }

  ngOnInit(): void {
  }

  enterValue(value: string): void {
    console.log(value);
    this.searchItem.emit(value);
  }

  @Output() searchItem = new EventEmitter<string>();

}
