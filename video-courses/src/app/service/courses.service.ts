import { Injectable } from '@angular/core';
<<<<<<< master
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

import { CourseListItem } from '../models/course-list-item.model';
=======
import { CourseListItem } from '../models/course-list-item.model'
>>>>>>> Add service for courses

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courseItems: Array<CourseListItem>

<<<<<<< master
  constructor(private http: HttpClient) {
    // this.courseItems = [
    //   {
    //     id: 1,
    //     name: 'Video Course 1',
    //     date: '12/8/2020',
    //     length: 48,
    //     description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    //     authors: null,
    //     isTopRated: false
    //   },
    //   {
    //     id: 2,
    //     name: 'Video Course 2',
    //     date: '11/28/2020',
    //     length: 88,
    //     description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    //     authors: null,
    //     isTopRated: true
    //   },
    //   {
    //     id: 3,
    //     name: 'Angular Training',
    //     date: '08/28/2020',
    //     length: 88,
    //     description: "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    //     authors: null,
    //     isTopRated: false
    //   }
    // ]
  }

  getCourseList(): Observable<Object> {
    return this.http.get(`${environment.apiBaseUrl}courses`)
  }

  getMoreCourse(startPoint: number): Observable<Object> {
    return this.http.get(`${environment.apiBaseUrl}courses?start=0&count=${startPoint+3}`)
  }

  getItemById(id: number): Observable<Object> {
    return this.http.get(`${environment.apiBaseUrl}courses?id=${id}`);
  }

  getItemByName(name: string): Observable<Object> {
    return this.http.get(`${environment.apiBaseUrl}courses?name=${name}`);
  }

  createCourseItem(newCourse: CourseListItem): object {
    this.http.post(`${environment.apiBaseUrl}courses`, newCourse);
    return { code: 0 }
  }

  updateItem(courseItem: CourseListItem): object {
    this.http.put(`${environment.apiBaseUrl}courses/${courseItem.id}`, courseItem)
    return { code: 0 }
  }

  deleteItemById(id: number): any {
    this.http.delete(`${environment.apiBaseUrl}courses/${id}`).subscribe(data => {
      this.getMoreCourse(0).subscribe(data => {
        return data;
      })
    });
=======
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
>>>>>>> Add service for courses
  }
}
