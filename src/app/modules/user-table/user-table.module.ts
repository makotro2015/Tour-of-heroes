import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserTableComponent } from './components/user-table/user-table.component';
import { CommonTableModule } from '../common-table/common-table.module';



@NgModule({
  declarations: [
    UserTableComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CommonTableModule,
  ],
  exports: [
    UserTableComponent,
  ],
})
export class UserTableModule { }
