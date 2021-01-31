import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { } from 'events';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(event: MouseEvent) {
    this.loadMore.emit(event);
    console.log("load more");
  }

  @Output() loadMore = new EventEmitter<MouseEvent>();
}
