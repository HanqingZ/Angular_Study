import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ToolsModule } from '../../tools/tools.module';
import { LayoutModule } from '../../layout/layout.module';
import { LoadingModule } from '../loading/loading.module'

import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { SearchControlComponent } from './search-control/search-control.component';
import { PopupComponent } from './popup/popup.component';
<<<<<<< master
import { FormsModule } from '@angular/forms';
<<<<<<< master
<<<<<<< master
import { ToolsModule } from '../../tools/tools.module';
import { LayoutModule } from '../../layout/layout.module'
=======
import { PipeModule } from '../../pipes/pipe.module';
import { DirectiveModule } from '../../directive/directive.module';
<<<<<<< master
<<<<<<< master
import { AlertComponent } from './alert/alert.component';
>>>>>>> Add service for courses
=======
>>>>>>> Add popup
=======
=======
import { ToolsModule } from '../../tools/tools.module';
>>>>>>> Add auth guard for several pages
import { LayoutModule } from '../../layout/layout.module'
>>>>>>> Add Delete popup
=======
>>>>>>> Add loading for all services all

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
<<<<<<< master
    PopupComponent
=======
    AlertComponent
>>>>>>> Add service for courses
=======
    PopupComponent
>>>>>>> Add popup
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
<<<<<<< master
<<<<<<< master
    ToolsModule,
<<<<<<< master
=======
    PipeModule,
    DirectiveModule,
>>>>>>> Add Delete popup
=======
    ToolsModule,
>>>>>>> Add auth guard for several pages
    LayoutModule
=======
    LayoutModule,
    LoadingModule
>>>>>>> Add loading for all services all
  ],
  exports: [
    RouterModule,
    CourseListComponent,
    AddCourseComponent,
    LoadMoreComponent,
    SearchControlComponent,
<<<<<<< master
<<<<<<< master
<<<<<<< master
    PopupComponent
=======
    AlertComponent
>>>>>>> Add service for courses
=======
    // AlertComponent,
=======
>>>>>>> Add Delete popup
    PopupComponent
>>>>>>> Add popup
  ]
})
export class CourseListModule { }
