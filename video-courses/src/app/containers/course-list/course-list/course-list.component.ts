import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CourseRequirement } from 'src/app/store/actions/course.actions';
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
  courseItems: Observable<CourseListItem[]>;
  currentItem: CourseListItem;
  searchKeyword: string;
  deletePopup: Boolean = false;
  pageTitle: string = 'Courses';
  loading: Observable<boolean>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private coursesService: CoursesService,
    private store: Store<fromCourse.AppState>
  ) {}

  ngOnInit(): void {
    this.courseItems = this.store.pipe(select(fromCourse.CourseListStatus));
    this.loading = this.store.pipe(select(fromCourse.LoadingStatus));

    this.store.dispatch(new CourseRequirement(0))
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
    this.store.dispatch(new CourseRequirement(6))
  }

  search(input): void {
    // TODO
    // this.coursesService.getItemByName(input)
    //   .subscribe((data: CourseListItem[]) => {
    //     this.courseItems = data;
    //     this.changeDetectorRef.detectChanges();
    //   })
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
}
