import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../../models';
import { CoursesService } from '../../../service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseItems: CourseListItem[];
  searchKeyword: string;
  deletePopup: Boolean = false;
  deleteAlert: Object;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courseItems = this.coursesService.getCourseList();
    // this.presentCourseItems = this.courseItems
  }

  OnClickRemovePopup(item) {
    this.deletePopup = true;
    this.deleteAlert = {
      title: "Delete course?",
      description: `Are you sure you want to delete /n${item.title}?`,
      submigMsg: ", delete"
    }
  }

  removeItem(item) {
    console.log("parent component - removeItem", this.courseItems);
    this.courseItems = this.coursesService.deleteItemById(item.id);
  }
}
