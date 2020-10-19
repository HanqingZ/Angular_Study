import { Component, OnInit } from '@angular/core';
import { CourseListItem } from '../../../modules';

@Component({
  selector: 'vc-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseItems: CourseListItem[] = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.'
    },
    {
      id: 2,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.'
    },
    {
      id: 3,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.'
    },
    {
      id: 4,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.'
    },
    {
      id: 5,
      title: 'Video Course 1. Name tag',
      creationDate: '08/28/2020',
      duration: 88,
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
