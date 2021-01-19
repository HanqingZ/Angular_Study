import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< master
<<<<<<< master
=======
>>>>>>> Add routing for course list pages and complete relevant methods
import { FormsModule } from '@angular/forms';
import { NewCourseComponent } from './new-course/new-course.component';
import { LayoutModule } from '../../layout/layout.module'
<<<<<<< master
=======
import { NewCourseComponent } from './new-course/new-course.component';
>>>>>>> Add-Course page
=======
>>>>>>> Modify breadcrumbs value

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
    LayoutModule
>>>>>>> Modify breadcrumbs value
  ],
  exports: [
    RouterModule,
    NewCourseComponent
  ]
})

export class AddCourseModule {}
