import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../../models';
import { CoursesService } from '../../../service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
<<<<<<< master
  changeDetection: ChangeDetectionStrategy.OnPush,
=======
  changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> Modify with onPush
})
export class CourseListComponent implements OnInit {
  courseItems: CourseListItem[];
<<<<<<< master
<<<<<<< master
  currentItem: CourseListItem;
  searchKeyword: string;
  deletePopup: Boolean = false;
  pageTitle: string = 'Courses';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.coursesService.getMoreCourse(0).subscribe((data: CourseListItem[]) => {
      this.courseItems = data.length === 0 ? undefined : data;
      this.changeDetectorRef.detectChanges()
    });
  }

  handleClickMore($event): void {
    this.coursesService.getMoreCourse(this.courseItems.length)
      .subscribe((data: CourseListItem[]) => {
        this.courseItems = data;
        this.changeDetectorRef.detectChanges()
      })
  }

  search(input): void {
    this.coursesService.getItemByName(input)
      .subscribe((data: CourseListItem[]) => {
        this.courseItems = data;
        this.changeDetectorRef.detectChanges();
      })
  }

  cancelPopup(): void {
    this.currentItem = null;
    this.deletePopup = false;
  }

  OnClickRemovePopup(item): void {
    this.currentItem = item;
    this.deletePopup = true;
  }

  removeItem(): void {
    this.changeDetectorRef.markForCheck();
    this.deletePopup = false;
    const result = this.coursesService.deleteItemById(this.currentItem.id)
    this.courseItems = result.length === 0 ? undefined : result
    this.changeDetectorRef.detectChanges()
=======
=======
  currentItem: CourseListItem;
>>>>>>> Add Delete popup
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
<<<<<<< master
<<<<<<< master
    this.courseItems = this.coursesService.deleteItemById(item.id);
>>>>>>> Add service for courses
=======
=======
    this.changeDetectorRef.markForCheck()
>>>>>>> Modify with onPush
    this.deletePopup = false;
    this.courseItems = this.coursesService.deleteItemById(this.currentItem.id);
>>>>>>> Add Delete popup
  }
}
