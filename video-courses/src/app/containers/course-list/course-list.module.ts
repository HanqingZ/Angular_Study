import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { PopupComponent } from './popup/popup.component';
import { FormsModule } from '@angular/forms';
<<<<<<< master
import { ToolsModule } from '../../tools/tools.module';
import { LayoutModule } from '../../layout/layout.module'
=======
import { PipeModule } from '../../pipes/pipe.module';
import { DirectiveModule } from '../../directive/directive.module';
import { AlertComponent } from './alert/alert.component';
>>>>>>> Add service for courses

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
    SearchControlComponent,
<<<<<<< master
    PopupComponent
=======
    AlertComponent
>>>>>>> Add service for courses
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    ToolsModule,
    LayoutModule
  ],
  exports: [
    RouterModule,
    CourseListComponent,
    AddCourseComponent,
    LoadMoreComponent,
    SearchControlComponent,
<<<<<<< master
    PopupComponent
=======
    AlertComponent
>>>>>>> Add service for courses
  ]
})
export class CourseListModule { }
