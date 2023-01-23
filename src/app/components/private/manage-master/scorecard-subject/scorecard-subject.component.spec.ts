import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardSubjectComponent } from './scorecard-subject.component';

describe('ScorecardSubjectComponent', () => {
  let component: ScorecardSubjectComponent;
  let fixture: ComponentFixture<ScorecardSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorecardSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScorecardSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
