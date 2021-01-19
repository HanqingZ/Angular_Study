import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { CoursesService } from '../../../service/courses.service'

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
  id: Number;
  isAddMode: boolean;
  pageTitle: string = "Courses";

  courseSelected: CourseListItem = {
    id: null,
    title: '',
    creationDate: '',
    duration: null,
    description: '',
    authors: '',
    isFavorite: false
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.isAddMode = !this.id

    if(!this.isAddMode) {
      const courseEdit = this.coursesService.getItemById(this.id)[0]

      if(!courseEdit) { this.router.navigate(['/debug']) }

      this.courseSelected = courseEdit
      const dates = courseEdit.creationDate.split('/')
      this.courseSelected.creationDate = `${dates[2]}-${dates[0]}-${dates[1]}`;
      this.pageTitle = `Courses/${this.courseSelected.title}`
    }
  }

  submitCourse() {
    let result;
    const dates = this.courseSelected.creationDate.split('-')
    this.courseSelected.creationDate = `${dates[1]}/${dates[2]}/${dates[0]}`;

    if(!this.courseSelected.title
      || !this.courseSelected.description
      || !this.courseSelected.duration
      || !this.courseSelected.creationDate
      || !this.courseSelected.authors
    ) {
      return console.log("Please Complete empty field")
    }

    if(!this.isAddMode){
      result = this.coursesService.updateItem(this.courseSelected)
      if(result.code === 0) {
        console.log("success");
        console.log(this.courseSelected);
        this.router.navigate(['/courses'])
      } else {
        console.log("failed to modify this course");
      }
    } else {
      this.courseSelected.id = this.coursesService.getCourseList.length
      result = this.coursesService.createCourseItem(this.courseSelected)
      if(result.code === 0) {
        this.router.navigate(['/courses'])
      } else {
        console.log("failed to add this course");
      }
    }
  }
}
