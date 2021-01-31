import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../../models';

@Pipe({
  name: 'filterBy'
})
export class FilterPipe implements PipeTransform {

  transform(courseList: Array<CourseListItem>, courseName: string): Array<CourseListItem> {
    let tmpCourseList: Array<CourseListItem>;
    if(courseName && courseList.length !== 0) {

      tmpCourseList = courseList.filter(ele =>
        ele.name.toUpperCase().includes(courseName.toUpperCase().trim())
      )
    } else {
      tmpCourseList = courseList;
    }

    return tmpCourseList;
  }

}
