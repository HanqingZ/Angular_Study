import { Injectable } from '@angular/core';
import { CourseListItem } from '../models/course-list-item.model'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courseItems: Array<CourseListItem>

  constructor() {
    this.courseItems = [
      {
        id: 1,
        title: 'Video Course 1',
        creationDate: '12/8/2020',
        duration: 48,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        authors: '',
        isFavorite: false
      },
      {
        id: 2,
        title: 'Video Course 2',
        creationDate: '11/28/2020',
        duration: 88,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        authors: '',
        isFavorite: true
      },
      {
        id: 3,
        title: 'Angular Training',
        creationDate: '08/28/2020',
        duration: 88,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        authors: '',
        isFavorite: false
      }
    ]
  }

  getCourseList(): CourseListItem[] {
    return this.courseItems;
  }

  createCourseItem(id, title, creationDate, duration, description, authors, isFavorite = false): void {
    this.courseItems.push({ id, title, creationDate, duration, description, authors, isFavorite });
  }

  getItemById(id: Number): CourseListItem[] {
    return this.courseItems.filter(ele => ele.id === id);
  }

  updateItem(courseItem: CourseListItem): void {
    this.courseItems.map(ele => {
      if(ele.id === courseItem.id) {
        ele = courseItem
      }
    })
    console.log(this.courseItems);
  }

  deleteItemById(id: Number): CourseListItem[] {
    this.courseItems = this.courseItems.filter(ele => ele.id !== id);
    return this.courseItems;
  }
}
