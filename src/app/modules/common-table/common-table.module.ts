import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { CommonTableComponent } from './components/common-table/common-table.component';



@NgModule({
  declarations: [
    CommonTableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    CommonTableComponent,
  ],
})
export class CommonTableModule { }
