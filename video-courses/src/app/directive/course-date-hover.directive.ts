import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCourseDateHover]'
})
export class CourseDateHoverDirective {
  // @Input() createDate: Date;
  private TODAY: Date = new Date();
  private FOURTEEN_DAYS_BEFORE: Date = new Date(this.TODAY.getFullYear(), this.TODAY.getMonth(), this.TODAY.getDate()-15);

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  @Input() set appCourseDateHover(createDate: Date) {
    const tempCreateDate = new Date(createDate)

    if(new Date(createDate) > this.TODAY) {
      this.setBgColor("blue");
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'backgroundColor',
        "#c6def1"
      )
    }
    if(tempCreateDate < this.TODAY && tempCreateDate >= this.FOURTEEN_DAYS_BEFORE){
      this.setBgColor("green");
      this.renderer.setStyle(
        this.eleRef.nativeElement,
        'backgroundColor',
        "#c9e4de"
      )
    }

  }

  setBgColor(color: string = 'white') {

    this.renderer.setStyle(
      this.eleRef.nativeElement,
      'backgroundColor',
      color
    )
  }

}
