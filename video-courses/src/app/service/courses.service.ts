import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { CourseListItem } from '../models/course-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courseItems: Array<CourseListItem>

  constructor(private httpClient: HttpClient) {
    this.courseItems = [
      {
        id: 1,
        name: 'Video Course 1',
        date: '12/8/2020',
        length: 48,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        authors: null,
        isTopRated: false
      },
      {
        id: 2,
        name: 'Video Course 2',
        date: '11/28/2020',
        length: 88,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        authors: null,
        isTopRated: true
      },
      {
        id: 3,
        name: 'Angular Training',
        date: '08/28/2020',
        length: 88,
        description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        authors: null,
        isTopRated: false
      }
    ]
  }

  getCourseList(): Observable<Object> {
    return this.httpClient.get(`${environment.apiBaseUrl}courses`)
  }

  createCourseItem(newCourse: CourseListItem): object {
    this.courseItems.push(newCourse);
    return { code: 0 }
  }

  getItemById(id: Number): CourseListItem[] {
    console.log(this.courseItems.filter(ele => ele.id === id));

    return this.courseItems.filter(ele => ele.id === id);
  }

  updateItem(courseItem: CourseListItem): object {
    this.courseItems.map(ele => {
      if(ele.id === courseItem.id) {
        ele = courseItem
      }
    })
    return { code: 0 }
  }

  deleteItemById(id: Number): CourseListItem[] {
    this.courseItems = this.courseItems.filter(ele => ele.id !== id);
    return this.courseItems;
  }
}
