import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  exports: [
    GroupTableComponent,
  ],
})
export class GroupTableModule { }
