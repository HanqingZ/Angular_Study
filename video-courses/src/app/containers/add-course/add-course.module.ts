import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< master
import { FormsModule } from '@angular/forms';
import { NewCourseComponent } from './new-course/new-course.component';
import { LayoutModule } from '../../layout/layout.module'
=======
import { NewCourseComponent } from './new-course/new-course.component';
>>>>>>> Add-Course page

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
    RouterModule.forChild(routes),
    FormsModule,
    LayoutModule
=======
    RouterModule.forChild(routes)
>>>>>>> Add-Course page
  ],
  exports: [
    RouterModule,
    NewCourseComponent
  ]
})

export class AddCourseModule {}
