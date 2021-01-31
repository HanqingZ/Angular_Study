import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss']
})
export class SearchControlComponent implements OnInit {
  searchValue$ = new Subject<KeyboardEvent>();

  constructor() { }

  ngOnInit(): void {
    this.searchValue$.pipe(debounce(() => timer(1000))).subscribe((event)=>{
      let searchValue = (<HTMLInputElement>event.target).value;
      if(searchValue.length >= 3){
        this.searchItem.emit(searchValue);
      }
    })
  }

  @Output() searchItem = new EventEmitter<any>();
}
