import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CourseDateHoverDirective } from './directives/course-date-hover.directive';
<<<<<<< master
<<<<<<< master

@NgModule({
  declarations: [
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    CourseDateHoverDirective
  ],
  imports: [CommonModule],
<<<<<<< master
  exports: [DurationPipe, OrderByPipe,FilterPipe, CourseDateHoverDirective]
=======
import { AuthGuard } from './auth.guard';
=======
>>>>>>> Add auth guard for add course and edit course

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterPipe, CourseDateHoverDirective],
  imports: [CommonModule],
<<<<<<< master
  exports: [DurationPipe, OrderByPipe,FilterPipe, CourseDateHoverDirective, AuthGuard]
>>>>>>> Add auth guard for several pages
=======
  exports: [DurationPipe, OrderByPipe,FilterPipe, CourseDateHoverDirective]
>>>>>>> Add auth guard for add course and edit course
=======
  exports: [
    DurationPipe,
    OrderByPipe,
    FilterPipe,
    CourseDateHoverDirective
  ]
>>>>>>> Add loading for all services all
})

export class ToolsModule { }
