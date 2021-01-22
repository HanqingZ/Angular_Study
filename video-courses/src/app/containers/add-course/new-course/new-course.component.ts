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
  id: number;
  isAddMode: boolean;
  pageTitle: string = "Courses";
  loading: boolean = true;

  courseSelected: CourseListItem = {
    id: null,
    name: '',
    date: '',
    length: null,
    description: '',
    authors: {
      id: null,
      name: null
    },
    isTopRated: false
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
      const dates = courseEdit.date.split('/')
      this.courseSelected.date = `${dates[2]}-${dates[0]}-${dates[1]}`;
      this.pageTitle = `Courses / ${this.courseSelected.name}`
    } else {
      this.pageTitle = `Courses / New Course`
    }

    this.loading = false;
  }

  submitCourse() {
    let result;
    const dates = this.courseSelected.date.split('-')
    this.courseSelected.date = `${dates[1]}/${dates[2]}/${dates[0]}`;

    if(!this.courseSelected.name
      || !this.courseSelected.description
      || !this.courseSelected.length
      || !this.courseSelected.date
      || !this.courseSelected.authors
    ) {
      return console.log("Please Complete empty field")
    }

    this.loading = true;
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
    this.loading = false;
  }
}
