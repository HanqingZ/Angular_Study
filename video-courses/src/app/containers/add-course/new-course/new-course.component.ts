import { Component, OnInit } from '@angular/core';
import { CourseListItem } from 'src/app/models';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  // public course: CourseListItem
  title: String;
  description: String;
  duration: Number;
  creationDate: Date;
  authors: String;

  constructor() { }

  ngOnInit(): void {
  }

}
