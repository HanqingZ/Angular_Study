import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CourseDateHoverDirective } from './directives/course-date-hover.directive';
<<<<<<< master

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterPipe, CourseDateHoverDirective],
  imports: [CommonModule],
  exports: [DurationPipe, OrderByPipe,FilterPipe, CourseDateHoverDirective]
=======
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterPipe, CourseDateHoverDirective, AuthGuard],
  imports: [CommonModule],
  exports: [DurationPipe, OrderByPipe,FilterPipe, CourseDateHoverDirective, AuthGuard]
>>>>>>> Add auth guard for several pages
})

export class ToolsModule { }
