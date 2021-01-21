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
      this.courseItems = data;
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
    this.coursesService.deleteItemById(this.currentItem.id)
    this.coursesService.getMoreCourse(0).subscribe((data: CourseListItem[]) => {
      this.courseItems = data;
      this.changeDetectorRef.detectChanges()
    })
  }
}
