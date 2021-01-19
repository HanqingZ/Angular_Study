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

const routes: Routes = [
  {
    path: 'courses',
<<<<<<< master
    loadChildren: CourseListComponent
=======
    loadChildren: () => import('./containers/course-list/course-list.module').then(m => m.CourseListModule)
>>>>>>> Complete Debug page and modify router
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
    loadChildren: () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'courses/:id',
<<<<<<< master
>>>>>>> Complete Debug page and modify router
    loadChildren: () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule)
=======
    loadChildren: () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule),
    canActivate: [AuthGuard]
>>>>>>> Add auth guard for several pages
  },
  {
>>>>>>> Add-Course page
    path: 'login',
    loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
<<<<<<< master
>>>>>>> Add Login page
=======
  },
  {
    path: 'error',
    loadChildren: () => import('./containers/debug/debug.module').then(m => m.DebugModule)
  },
  {
    path: "**",
    loadChildren: () => import('./containers/debug/debug.module').then(m => m.DebugModule)
>>>>>>> Complete Debug page and modify router
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
