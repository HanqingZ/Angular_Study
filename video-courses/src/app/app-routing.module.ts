import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './tools/auth.guard';

const CourseListComponent = () => import('./containers/course-list/course-list.module').then(m => m.CourseListModule);
const AddCourseComponent = () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule);
const LoginComponent = () => import('./containers/login/login.module').then(m => m.LoginModule);
const DebugComponent = () => import('./containers/debug/debug.module').then(m => m.DebugModule);

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: CourseListComponent
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
