import { Component, OnInit } from '@angular/core';
<<<<<<< master
<<<<<<< master
import { Router, ActivatedRoute } from '@angular/router';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { CoursesService } from '../../../service/courses.service'
=======
import { CourseListItem } from 'src/app/models';
>>>>>>> Add-Course page
=======
import { Router, ActivatedRoute } from '@angular/router';
import { CourseListItem } from 'src/app/models/course-list-item.model';
import { CoursesService } from '../../../service/courses.service'
>>>>>>> Add routing for course list pages and complete relevant methods

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.scss']
})
export class NewCourseComponent implements OnInit {
<<<<<<< master
<<<<<<< master
<<<<<<< master
  id: number;
  isAddMode: boolean;
  pageTitle: string = "Courses";

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
=======
  // public course: CourseListItem
  title: String;
  description: String;
  duration: Number;
  creationDate: Date;
  authors: String;
=======
  id: Number;
=======
  id: number;
>>>>>>> Implement load more function
  isAddMode: boolean;
<<<<<<< master
>>>>>>> Add routing for course list pages and complete relevant methods
=======
  pageTitle: string = "Courses";
<<<<<<< master
>>>>>>> Modify breadcrumbs value
=======
  loading: boolean = true;
>>>>>>> Add loading for all services all

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

<<<<<<< master
>>>>>>> Add-Course page
=======
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
>>>>>>> Add routing for course list pages and complete relevant methods
}
