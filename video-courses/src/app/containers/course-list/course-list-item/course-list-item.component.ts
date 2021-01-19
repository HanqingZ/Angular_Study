import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router'
import { CourseListItem } from '../../../models/course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
})
export class CourseListItemComponent implements OnInit {
  @Input() item: CourseListItem;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  editRequest(itemId: Number): void {
    if(itemId){
      this.router.navigate([`/courses/${itemId}`])
    }
  }

  deleteRequest(item: CourseListItem): void {
    this.deleteItem.emit(item);
    console.log("child components - deleteRequest", item.id);
  }

  @Output() deleteItem = new EventEmitter<CourseListItem>();

}
