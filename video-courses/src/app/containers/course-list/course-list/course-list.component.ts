import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../../models';
import { CoursesService } from '../../../service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListComponent implements OnInit {
  courseItems: CourseListItem[];
  currentItem: CourseListItem;
  searchKeyword: string;
  deletePopup: Boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.courseItems = this.coursesService.getCourseList();
    // this.presentCourseItems = this.courseItems
  }

  cancelPopup(): void {
    this.currentItem = null;
    this.deletePopup = false;
    console.log("Close Popup");
  }

  OnClickRemovePopup(item): void {
    this.currentItem = item;
    this.deletePopup = true;
  }

  removeItem(): void {
    console.log("parent component - removeItem", this.courseItems);
    this.changeDetectorRef.markForCheck()
    this.deletePopup = false;
    this.courseItems = this.coursesService.deleteItemById(this.currentItem.id);
  }
}
