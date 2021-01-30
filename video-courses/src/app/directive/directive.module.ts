import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDateHoverDirective } from './course-date-hover.directive';

@NgModule({
  declarations: [CourseDateHoverDirective],
  imports: [CommonModule],
  exports: [CourseDateHoverDirective]
})

export class DirectiveModule { }
