import { Component, Input, OnInit } from '@angular/core';
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

}
