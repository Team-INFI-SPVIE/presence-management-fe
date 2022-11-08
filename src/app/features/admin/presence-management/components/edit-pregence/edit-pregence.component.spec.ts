import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPregenceComponent } from './edit-pregence.component';

describe('EditPregenceComponent', () => {
  let component: EditPregenceComponent;
  let fixture: ComponentFixture<EditPregenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPregenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPregenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
