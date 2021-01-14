import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< master
import { FormsModule } from '@angular/forms';
=======
>>>>>>> Add Login page
import { LoginComponent } from './login/login.component';

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
    FormsModule,
=======
>>>>>>> Add Login page
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LoginComponent
  ]
})
export class LoginModule { }
