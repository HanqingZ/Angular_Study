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
    console.log(this.searchValue$.next());
    this.searchValue$.pipe().subscribe((event)=>{
      this.searchItem.emit((<HTMLInputElement>event.target).value);
    })
  }

  @Output() searchItem = new EventEmitter<any>();
}
