import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../../models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courseList: Array<CourseListItem>): Array<CourseListItem> {
    courseList.sort((a: CourseListItem, b: CourseListItem) => {
      const dateA = new Date(a.creationDate).getTime();
      const dateB = new Date(b.creationDate).getTime();
      return dateA >= dateB ? 1: -1;
    })
    return courseList;
  }

}
