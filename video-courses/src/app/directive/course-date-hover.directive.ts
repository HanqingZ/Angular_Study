import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseDateHover]'
})
export class CourseDateHoverDirective {
  // @Input() createDate: Date;
  private TODAY: Date = new Date();
  private FOURTEEN_DAYS_BEFORE: Date = new Date();

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  @Input() set appCourseDateHover(createDate: Date) {
    const tempCreateDate = new Date(createDate)
    console.log("createDate: ", tempCreateDate);
    console.log("today: ", this.TODAY);
    console.log("fourteen days before: ", this.FOURTEEN_DAYS_BEFORE);

    if(new Date(createDate) > this.TODAY) {
      console.log("Future");
      // this.setBgColor("blue");
      this.setBgColor("#c6def1");
    }
    if(tempCreateDate < this.TODAY && tempCreateDate >= this.FOURTEEN_DAYS_BEFORE){
      console.log("Recent");
      // this.setBgColor("green");
      this.setBgColor("#c9e4de");
    }

  }

  setBgColor(color: string = 'white') {
    console.log(color);

    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'backgroundColor',
      color
    )
  }

}
