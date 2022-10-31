import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { GroupTableComponent } from './components/group-table/group-table.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonTableModule } from '../common-table/common-table.module';



@NgModule({
  declarations: [
    GroupTableComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  exports: [
    GroupTableComponent,
  ],
})
export class GroupTableModule { }
