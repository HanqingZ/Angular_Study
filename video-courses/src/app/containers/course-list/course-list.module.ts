import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: CourseListComponent
  }
];

@NgModule({
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseComponent,
    LoadMoreComponent,
    SearchControlComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    CourseListComponent,
    AddCourseComponent,
    LoadMoreComponent,
    SearchControlComponent
  ]
})
export class CourseListModule { }
