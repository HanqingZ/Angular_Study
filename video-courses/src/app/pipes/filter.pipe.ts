import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../models';

@Pipe({
  name: 'filterBy'
})
export class FilterPipe implements PipeTransform {

  transform(courseList: Array<CourseListItem>, courseName: string): Array<CourseListItem> {
    console.log("filter pipe", courseName);
    let tmpCourseList: Array<CourseListItem>;

    if(courseName && courseList.length !== 0) {
      console.log("in filter");

      tmpCourseList = courseList.filter(ele =>
        ele.title.toUpperCase().includes(courseName.toUpperCase().trim())
      )
      console.log(tmpCourseList);

    } else {
      tmpCourseList = courseList;
    }
    console.log(tmpCourseList);

    return tmpCourseList;
  }

}
