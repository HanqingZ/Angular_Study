import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CourseActions from 'src/app/store/actions/course.actions';
import * as fromCourse from 'src/app/store/reducers/course.reducer';

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
  loading: boolean = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private coursesService: CoursesService,
    private store: Store<fromCourse.AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new CourseActions.CourseRequirement(0))
    this.store.subscribe(state => {
      console.log('subscribe', state);
      this.courseItems = state.courses.course;
      this.loading = state.courses.isLoading;
      console.log(this.courseItems)
      this.changeDetectorRef.detectChanges()
    })
    // this.loading = this.store.pipe(select(fromCourse.LoadingStatus));
    // this.courseItems = this.store.pipe(select(fromCourse.CourseListStatus));

    // this.store.subscribe(state => this.loading = )
    // this.coursesService.getMoreCourse(0).subscribe((data: CourseListItem[]) => {
    //   this.courseItems = data.length === 0 ? undefined : data;
    //   this.changeDetectorRef.detectChanges()
    // });
  }

  handleClickMore($event): void {
    // this.coursesService.getMoreCourse(this.courseItems.length)
    //   .subscribe((data: CourseListItem[]) => {
    //     this.courseItems = data;
    //     this.changeDetectorRef.detectChanges()
    //   })
    this.store.dispatch(new CourseActions.CourseRequirement(this.courseItems.length))
  }

  search(input: string): void {
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
=======
  pageTitle: string = "Courses";
>>>>>>> Modify breadcrumbs value
=======
  pageTitle: string = 'Courses';
<<<<<<< master
>>>>>>> Add http request with course GET api
=======
  loading: boolean = true;
>>>>>>> Add loading for all services all

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.coursesService.getMoreCourse(0).subscribe((data: CourseListItem[]) => {
      this.courseItems = data.length === 0 ? undefined : data;
      this.changeDetectorRef.detectChanges()
    });
    this.loading = false;
  }

  handleClickMore($event): void {
    this.loading = true;
    this.coursesService.getMoreCourse(this.courseItems.length)
      .subscribe((data: CourseListItem[]) => {
        this.courseItems = data;
        this.changeDetectorRef.detectChanges()
      })
    this.loading = false;
  }

  search(input): void {
    this.loading = true;
    this.coursesService.getItemByName(input)
      .subscribe((data: CourseListItem[]) => {
        this.courseItems = data;
        this.changeDetectorRef.detectChanges();
      })
    this.loading = false;
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
<<<<<<< master
<<<<<<< master
    console.log("parent component - removeItem", this.courseItems);
<<<<<<< master
<<<<<<< master
    this.courseItems = this.coursesService.deleteItemById(item.id);
>>>>>>> Add service for courses
=======
=======
    this.changeDetectorRef.markForCheck()
>>>>>>> Modify with onPush
=======
=======
    this.loading = true;
>>>>>>> Add loading for all services all
    this.changeDetectorRef.markForCheck();
>>>>>>> Add http request with course GET api
    this.deletePopup = false;
<<<<<<< master
<<<<<<< master
    this.courseItems = this.coursesService.deleteItemById(this.currentItem.id);
>>>>>>> Add Delete popup
=======
    this.coursesService.deleteItemById(this.currentItem.id)
    this.coursesService.getMoreCourse(0).subscribe((data: CourseListItem[]) => {
      this.courseItems = data;
      this.changeDetectorRef.detectChanges()
    })
>>>>>>> Modify Login logic
=======
    const result = this.coursesService.deleteItemById(this.currentItem.id)
    this.courseItems = result.length === 0 ? undefined : result
    this.loading = false;
    this.changeDetectorRef.detectChanges()
>>>>>>> Modify delete course issue
  }
}
