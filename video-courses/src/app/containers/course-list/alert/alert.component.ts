import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  // @Input() alertMsg: Object;
  deleteAlert: Object;

  constructor() { }

  ngOnInit(): void {
    this.deleteAlert = {
      title: "Delete course?",
      description: `Are you sure you want to delete?`,
      submigMsg: ", delete"
    }
  }

}
