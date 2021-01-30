import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoadMoreComponent } from './load-more.component';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    spyOn(console, "log");
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should test log function', () => {
    let element = fixture.debugElement.query(By.css('a'))
    element.triggerEventHandler('click', null);

    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('load more')
  })
});
