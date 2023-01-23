import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddScorecardSubjectComponent } from '../add-scorecard-subject/add-scorecard-subject.component';
import { ScorecardSubjectComponent } from './scorecard-subject.component';

const routes: Routes = [
  {
    path: 'scorecard-subject',
    component: ScorecardSubjectComponent
  },
  {
    path: 'add-scorecard-subject',
    component: AddScorecardSubjectComponent
  },
  {
    path: 'add-scorecard-subject/:id',
    component: AddScorecardSubjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScorecardSubjectRoutingModule { }
