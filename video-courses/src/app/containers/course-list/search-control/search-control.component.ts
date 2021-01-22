import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  searchValue$ = new Subject<KeyboardEvent>();

  constructor() { }

  ngOnInit(): void {
    this.searchValue$.pipe().subscribe((event)=>{
      let searchValue = (<HTMLInputElement>event.target).value;
      if(searchValue.length >= 3){
        this.searchItem.emit(searchValue);
      }
    })
  }

  @Output() searchItem = new EventEmitter<any>();
}
