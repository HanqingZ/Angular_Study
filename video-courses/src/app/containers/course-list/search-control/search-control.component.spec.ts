import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearchControlComponent } from './search-control.component';

describe('SearchControlComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchControlComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should test enterValue function', () => {
    let textInput = fixture.nativeElement.querySelector('input')
    let buttonElement = fixture.debugElement.nativeElement.querySelector('button')
    textInput.value = "hello";
    textInput.dispatchEvent(new Event('input'));
    buttonElement.click();

    fixture.detectChanges();

    expect(textInput.value).toBe("hello");
  })
});
