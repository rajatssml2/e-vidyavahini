import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-ag-table',
  templateUrl: './ag-table.component.html',
  styleUrls: ['./ag-table.component.css']
})
export class AgTableComponent implements OnInit {
  @Input() rowData:any;
  @Input() columnDefs:any;

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
  };

  constructor(public router: Router) {}

  ngOnInit(): void {
    
  }
  onGridReady(params:any) {
  }
  onCellClicked(event:any) {
    console.log("event===",event)
    if(event && event.data?.id) {
      this.router.navigate(['/add-scorecard-subject', event.data.id])
    }
  }
}
