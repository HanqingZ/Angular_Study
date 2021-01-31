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
<<<<<<< master
<<<<<<< master
<<<<<<< master
    path: 'courses/new',
    loadChildren: AddCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
    loadChildren: AddCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: LoginComponent
  },
  {
    path: 'error',
    loadChildren: DebugComponent
  },
  {
    path: "**",
    loadChildren: DebugComponent
=======
=======
    path: 'addcourse',
=======
    path: 'courses/new',
    loadChildren: AddCourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
<<<<<<< master
<<<<<<< master
>>>>>>> Complete Debug page and modify router
    loadChildren: () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule)
=======
    loadChildren: () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule),
=======
    loadChildren: AddCourseComponent,
>>>>>>> Add auth guard for add course and edit course
    canActivate: [AuthGuard]
>>>>>>> Add auth guard for several pages
  },
  {
>>>>>>> Add-Course page
    path: 'login',
<<<<<<< master
    loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
<<<<<<< master
>>>>>>> Add Login page
=======
=======
    loadChildren: LoginComponent
>>>>>>> Add auth guard for add course and edit course
  },
  {
    path: 'error',
    loadChildren: DebugComponent
  },
  {
    path: "**",
<<<<<<< master
    loadChildren: () => import('./containers/debug/debug.module').then(m => m.DebugModule)
>>>>>>> Complete Debug page and modify router
=======
    loadChildren: DebugComponent
>>>>>>> Add auth guard for add course and edit course
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
