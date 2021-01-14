import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() itemTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  cancelPopup(): void {
    this.closePopup.emit()
  }

  deleteItem(): void {
    this.submitDelete.emit()
  }

  @Output() closePopup = new EventEmitter();
  @Output() submitDelete = new EventEmitter();
}
