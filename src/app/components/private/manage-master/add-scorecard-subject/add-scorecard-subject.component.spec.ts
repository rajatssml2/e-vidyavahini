import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScorecardSubjectComponent } from './add-scorecard-subject.component';

describe('AddScorecardSubjectComponent', () => {
  let component: AddScorecardSubjectComponent;
  let fixture: ComponentFixture<AddScorecardSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScorecardSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddScorecardSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
