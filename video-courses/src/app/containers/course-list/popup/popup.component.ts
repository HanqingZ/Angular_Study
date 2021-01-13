<<<<<<< master
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Add popup

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
<<<<<<< master
  @Input() itemTitle: string;
=======
>>>>>>> Add popup

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< master
  cancelPopup(): void {
    this.closePopup.emit()
  }

  deleteItem(): void {
    this.submitDelete.emit()
  }

  @Output() closePopup = new EventEmitter();
  @Output() submitDelete = new EventEmitter();
=======
>>>>>>> Add popup
}
