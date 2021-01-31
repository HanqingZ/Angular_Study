import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DebugComponent } from './debug/debug.component'

const routes: Routes = [
  {
    path: '',
    component: DebugComponent
  }
];

@NgModule({
  declarations: [
    DebugComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    DebugComponent,
    RouterModule
  ]
})
export class DebugModule { }
