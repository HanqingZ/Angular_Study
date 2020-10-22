import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseListItem } from '../../../models/course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  Math = Math;
  @Input() item: CourseListItem;
  constructor() { }

  ngOnInit(): void {
  }

  deleteRequest(item: CourseListItem) : void {
    console.log(item.id);
    this.deleteItem.emit(item);
  }

  @Output() deleteItem = new EventEmitter<CourseListItem>();

}
