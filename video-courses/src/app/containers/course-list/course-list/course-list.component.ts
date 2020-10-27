import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../../models';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseListItem[] = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      authors: ''
    },
    {
      id: 2,
      title: 'Video Course 2. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      authors: ''
    },
    {
      id: 3,
      title: 'Video Course 3. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      authors: ''
    }
  ];

  presentCourseItems: CourseListItem[];

  constructor() {
    this.presentCourseItems = this.courseItems
  }

  ngOnInit(): void {
  }

  removeItem(item) {
    this.presentCourseItems = this.presentCourseItems.filter(ele => ele.id !== item.id)
  }

}
