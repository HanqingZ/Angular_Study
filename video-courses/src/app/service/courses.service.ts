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

  constructor(private http: HttpClient) {
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
  }
}
