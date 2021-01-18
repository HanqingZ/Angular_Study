import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< master
<<<<<<< master
import { FormsModule } from '@angular/forms';
=======
>>>>>>> Add Login page
=======
import { FormsModule } from '@angular/forms';
>>>>>>> Modify login logic
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
<<<<<<< master
    FormsModule,
=======
>>>>>>> Add Login page
=======
    FormsModule,
>>>>>>> Modify login logic
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    LoginComponent
  ]
})
export class LoginModule { }
