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
import { AlertComponent } from './alert/alert.component';

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
    AlertComponent
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
    AlertComponent
  ]
})
export class CourseListModule { }
