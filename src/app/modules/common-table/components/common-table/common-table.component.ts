import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../interfaces/user';
import { Group } from '../../interfaces/group';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent implements OnInit {

  @Input() dataSource: any;
  @Input() displayedColumns?: string[];

  ngOnInit(): void {
    console.log(this.dataSource);
  }

}
