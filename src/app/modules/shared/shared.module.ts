import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// mat module import start
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { MatCarouselModule } from 'ng-mat-carousel';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { TextFieldComponent } from '../../components/common/text-field/text-field.component';
import { TextAreaComponent } from '../../components/common/text-area/text-area.component';
import { SelectSearchComponent } from '../../components/common/select-search/select-search.component';
// mat module import end
import { AgGridModule } from 'ag-grid-angular';
import {
  FormsModule,
  ReactiveFormsModule,
  } from "@angular/forms";
import { ButtonComponent } from '../../components/common/button/button.component';
import { AgTableComponent } from '../../components/common/ag-table/ag-table.component';


@NgModule({
  declarations: [
    TextFieldComponent,
    TextAreaComponent,
    SelectSearchComponent,
    ButtonComponent,
    AgTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    // MatCarouselModule.forRoot(),
    MatTableModule,
    MatTabsModule,
    MatProgressBarModule,
    MatPaginatorModule,
    AgGridModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatProgressBarModule,
    AgGridModule,

    TextFieldComponent,
    TextAreaComponent,
    SelectSearchComponent,
    ButtonComponent,
    AgTableComponent
  ]
})
export class SharedModule { }
