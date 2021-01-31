import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< master
<<<<<<< master
import { FormsModule } from '@angular/forms';
<<<<<<< master
=======
>>>>>>> Add Login page
=======
import { FormsModule } from '@angular/forms';
>>>>>>> Modify login logic
=======

>>>>>>> Add loading for all services all
import { LoginComponent } from './login/login.component';
import { LoadingModule } from '../loading/loading.module'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
<<<<<<< master
<<<<<<< master
    FormsModule,
=======
>>>>>>> Add Login page
=======
    FormsModule,
<<<<<<< master
>>>>>>> Modify login logic
    RouterModule.forChild(routes)
=======
    RouterModule.forChild(routes),
    LoadingModule
>>>>>>> Add loading for all services all
  ],
  exports: [
    RouterModule,
    LoginComponent
  ]
})
export class LoginModule { }
