import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListItem } from 'src/app/models';
import { CourseListComponent } from '../course-list/course-list.component';

import { CourseListItemComponent } from './course-list-item.component';
import { DurationPipe } from "../../../tools/pipes/duration.pipe";

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;
  const courseItem: CourseListItem = {
    id: 1,
    name: 'Video Course',
    date: '08/28/2020',
    length: 88,
    description: "Learn about where you can find course descriptions.",
    authors: null,
    isTopRated: false
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListItemComponent, DurationPipe ],
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

  it('should create a course with short duration', () => {
    const courseItem1: CourseListItem = {
      id: 1,
      name: 'Video Course 1. Name tag',
      date: '08/28/2020',
      length: 28,
      description: "Learn about where you can find course descriptions.",
      authors: null,
      isTopRated: false
    }

    component.item = courseItem1;
    fixture.detectChanges();

    expect(component.item).toBe(courseItem1);
  })

  it("should test deleteRequest function", () => {
    component.item = courseItem;
    let deleteButton = fixture.debugElement.nativeElement.querySelector("button.delete")
    deleteButton.click();
    fixture.detectChanges();

    // expect(component.deleteRequest).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith("child components - deleteRequest", courseItem.id);
  });
});
