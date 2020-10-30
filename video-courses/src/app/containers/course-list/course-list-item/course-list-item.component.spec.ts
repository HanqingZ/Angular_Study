import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListItem } from 'src/app/models';
import { CourseListComponent } from '../course-list/course-list.component';

import { CourseListItemComponent } from './course-list-item.component';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent ],
      providers: [ CourseListComponent ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const courseItem: CourseListItem = {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: "Learn about where you can find course descriptions.",
      authors: ''
    }

    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.item = courseItem;
    fixture.detectChanges();

    expect(component.item).toBe(courseItem);
  });
});
