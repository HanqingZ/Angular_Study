import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../../models';
import { CoursesService } from '../../../service/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent implements OnInit {
  courseItems: CourseListItem[];
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
>>>>>>> Add service for courses
  }
}
