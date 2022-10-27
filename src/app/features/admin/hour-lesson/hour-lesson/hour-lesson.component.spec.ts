import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourLessonComponent } from './hour-lesson.component';

describe('HourLessonComponent', () => {
  let component: HourLessonComponent;
  let fixture: ComponentFixture<HourLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourLessonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HourLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
