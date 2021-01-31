import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< master
<<<<<<< master
=======
>>>>>>> Add routing for course list pages and complete relevant methods
import { FormsModule } from '@angular/forms';
import { NewCourseComponent } from './new-course/new-course.component';
<<<<<<< master
import { LayoutModule } from '../../layout/layout.module'
<<<<<<< master
=======
import { NewCourseComponent } from './new-course/new-course.component';
>>>>>>> Add-Course page
=======
>>>>>>> Modify breadcrumbs value
=======
import { LayoutModule } from '../../layout/layout.module';
import { LoadingModule } from '../loading/loading.module'
>>>>>>> Add loading for all services all

const routes: Routes = [
  {
    path: '',
    component: NewCourseComponent
  }
];

@NgModule({
  declarations: [
    NewCourseComponent
  ],
  imports: [
    CommonModule,
<<<<<<< master
<<<<<<< master
    RouterModule.forChild(routes),
    FormsModule,
    LayoutModule
=======
    RouterModule.forChild(routes)
>>>>>>> Add-Course page
=======
    RouterModule.forChild(routes),
<<<<<<< master
    FormsModule
>>>>>>> Add routing for course list pages and complete relevant methods
=======
    FormsModule,
<<<<<<< master
    LayoutModule
>>>>>>> Modify breadcrumbs value
=======
    LayoutModule,
    LoadingModule
>>>>>>> Add loading for all services all
  ],
  exports: [
    RouterModule,
    NewCourseComponent
  ]
})

export class AddCourseModule {}
