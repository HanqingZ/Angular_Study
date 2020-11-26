import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DurationPipe } from './duration.pipe';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [DurationPipe, OrderByPipe, FilterPipe],
  imports: [CommonModule],
  exports: [DurationPipe, OrderByPipe,FilterPipe]
})

export class PipeModule { }
