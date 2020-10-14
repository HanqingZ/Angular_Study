import { Component, Input, OnInit } from '@angular/core';
import { CourseListItem } from '../course-list/course-list-item-module';

@Component({
  selector: 'vc-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {

  @Input() item: CourseListItem;
  constructor() { }

  ngOnInit(): void {
  }

}
