import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchControlComponent } from './search-control/search-control.component';
// import { AddCourseComponent, LoadMoreComponent, SearchControlComponent } from 'src/app/components';


@NgModule({
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseComponent,
    LoadMoreComponent,
    SearchControlComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CourseListComponent,
    AddCourseComponent,
    LoadMoreComponent,
    SearchControlComponent
  ]
})
export class CourseListModule { }
