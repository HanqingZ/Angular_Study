<<<<<<< master
<<<<<<< master
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Add popup
=======
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> Add Delete popup

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
<<<<<<< master
<<<<<<< master
  @Input() itemTitle: string;
=======
>>>>>>> Add popup
=======
  @Input() itemTitle: string;
>>>>>>> Add Delete popup

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< master
<<<<<<< master
=======
>>>>>>> Add Delete popup
  cancelPopup(): void {
    this.closePopup.emit()
  }

  deleteItem(): void {
    this.submitDelete.emit()
  }

  @Output() closePopup = new EventEmitter();
  @Output() submitDelete = new EventEmitter();
<<<<<<< master
=======
>>>>>>> Add popup
=======
>>>>>>> Add Delete popup
}
