import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  public searchInput: String;

  constructor() { }

  ngOnInit(): void {
  }

  enterValue(value): void {
    console.log(value);
  }

}
