import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { OrderByPipe } from '../../../tools/pipes/order-by.pipe';
import { FilterPipe } from "../../../tools/pipes/filter.pipe";

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListComponent, OrderByPipe, FilterPipe ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
