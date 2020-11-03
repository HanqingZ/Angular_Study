import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseListItem } from '../../../models/course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() item: CourseListItem;
  constructor() { }

  ngOnInit(): void {
  }

  modifyDuration(time) : string {
    return `${Math.floor(time / 60)}h ${time % 60}min`;
  }

  deleteRequest(item: CourseListItem) : void {
    console.log("child components - deleteRequest", item.id);
    this.deleteItem.emit(item);
  }

  @Output() deleteItem = new EventEmitter<CourseListItem>();

}
