import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EffectsModule, Actions } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { authReducer } from '../../store/reducers/auth.reducer';
import { AuthEffect } from '../../store/effects/auth.effects';

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
    FormsModule,
    RouterModule.forChild(routes),
    LoadingModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffect])
  ],
  exports: [
    RouterModule,
    LoginComponent
  ]
})
export class LoginModule { }
