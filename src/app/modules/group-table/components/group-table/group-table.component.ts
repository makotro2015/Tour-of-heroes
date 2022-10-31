import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { CommonTableComponent } from 'src/app/modules/common-table/components/common-table/common-table.component';
import { Group } from '../../interfaces/group';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss'],
})
export class GroupTableComponent extends CommonTableComponent implements OnInit {
 
  public displayedColumns = ['name', 'countMembers', 'countPosts', 'countComments'];

  constructor(private groupService: GroupService, public override liveAnnouncer: LiveAnnouncer) { 
    super(liveAnnouncer);
  }

  ngOnInit(): void {
    this.getGroups();
  }

  private getGroups(): void {
    this.groupService.getGroups()
      .subscribe((dataGroups: Group[]) => {
        this.initTable(dataGroups);
      });
  }
}
