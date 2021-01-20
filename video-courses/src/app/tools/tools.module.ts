import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CourseDateHoverDirective } from './directives/course-date-hover.directive';

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterPipe, CourseDateHoverDirective],
  imports: [CommonModule],
  exports: [DurationPipe, OrderByPipe,FilterPipe, CourseDateHoverDirective]
})

export class ToolsModule { }
