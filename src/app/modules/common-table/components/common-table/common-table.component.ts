import { ViewChild, Component } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent {

 public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>;

 public searchKey = '';

 @ViewChild(MatPaginator) paginator: any;
 @ViewChild(MatSort) sort: any;

 constructor(public liveAnnouncer: LiveAnnouncer) { 
 }

 public initTable (dataGroups: any[]): void {
   this.dataSource = new MatTableDataSource<any>(dataGroups)
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
 }

 public announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this.liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this.liveAnnouncer.announce('Sorting cleared');
    }
  }

  public applyFilter(word: string){
    this.dataSource.filter = word.trim().toLowerCase();
    console.log(word)
  }
}
