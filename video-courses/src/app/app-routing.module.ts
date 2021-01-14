import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './tools/auth.guard';
<<<<<<< master

const CourseListComponent = () => import('./containers/course-list/course-list.module').then(m => m.CourseListModule);
const AddCourseComponent = () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule);
const LoginComponent = () => import('./containers/login/login.module').then(m => m.LoginModule);
const DebugComponent = () => import('./containers/debug/debug.module').then(m => m.DebugModule);
=======
>>>>>>> Add auth guard for several pages

const CourseListComponent = () => import('./containers/course-list/course-list.module').then(m => m.CourseListModule);
const AddCourseComponent = () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule);
const LoginComponent = () => import('./containers/login/login.module').then(m => m.LoginModule);
const DebugComponent = () => import('./containers/debug/debug.module').then(m => m.DebugModule);

const routes: Routes = [
  {
    path: 'courses',
<<<<<<< master
<<<<<<< master
    loadChildren: CourseListComponent
=======
    loadChildren: () => import('./containers/course-list/course-list.module').then(m => m.CourseListModule)
>>>>>>> Complete Debug page and modify router
=======
    loadChildren: CourseListComponent
>>>>>>> Add auth guard for add course and edit course
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
