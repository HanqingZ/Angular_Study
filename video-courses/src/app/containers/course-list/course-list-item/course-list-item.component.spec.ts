import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListItem } from 'src/app/models';
import { CourseListComponent } from '../course-list/course-list.component';

import { CourseListItemComponent } from './course-list-item.component';

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  const courseItem: CourseListItem = {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: '08/28/2020',
    duration: 88,
    description: "Learn about where you can find course descriptions.",
    authors: ''
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent ],
      providers: [ CourseListComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    spyOn(console, "log");
  });

  it('should create', () => {
    component.item = courseItem;
    fixture.detectChanges();

    expect(component.item).toBe(courseItem);
  });

  it("should test deleteRequest function", () => {
    component.item = courseItem;
    let deleteButton = fixture.debugElement.nativeElement.querySelector("button.delete")
    deleteButton.click();
    fixture.detectChanges();

    expect(console.log).toHaveBeenCalled();
  });
});
