import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorelistDetailComponent } from './scorelist-detail.component';

describe('ScorelistDetailComponent', () => {
  let component: ScorelistDetailComponent;
  let fixture: ComponentFixture<ScorelistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorelistDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorelistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
