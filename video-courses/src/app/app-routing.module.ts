import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('./containers/course-list/course-list.module').then(m => m.CourseListModule)
  },
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  },
  {
    path: 'courses/new',
    loadChildren: () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule)
  },
  {
    path: 'courses/:id',
    loadChildren: () => import('./containers/add-course/add-course.module').then(m => m.AddCourseModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./containers/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./containers/debug/debug.module').then(m => m.DebugModule)
  },
  {
    path: "**",
    loadChildren: () => import('./containers/debug/debug.module').then(m => m.DebugModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
