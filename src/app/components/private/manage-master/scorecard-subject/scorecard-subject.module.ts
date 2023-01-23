import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScorecardSubjectRoutingModule } from './scorecard-subject-routing.module';
import { ScorecardSubjectComponent } from './scorecard-subject.component';

import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AddScorecardSubjectComponent } from '../add-scorecard-subject/add-scorecard-subject.component';


@NgModule({
  declarations: [
    ScorecardSubjectComponent,
    AddScorecardSubjectComponent
  ],
  imports: [
    CommonModule,
    ScorecardSubjectRoutingModule,
    SharedModule
  ]
})
export class ScorecardSubjectModule { }
