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
    this.searchValue$.pipe(debounce(() => timer(1000))).subscribe((event)=>{
      let searchValue = (<HTMLInputElement>event.target).value;
      if(searchValue.length >= 3){
        this.searchItem.emit(searchValue);
      }
    })
  }

  enterValue(value: string): void {
    console.log(value);
    this.searchItem.emit(value);
  }

  @Output() searchItem = new EventEmitter<string>();

}
