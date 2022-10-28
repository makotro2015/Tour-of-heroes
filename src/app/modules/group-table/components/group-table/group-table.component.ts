import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../services/group.service';
import { Group } from '../../interfaces/group';

@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss'],
})
export class GroupTableComponent implements OnInit {

  groups?: Group[];

  public columns = ['name', 'countMembers', 'countPosts', 'countComments'];

  constructor(private groupService: GroupService) { 
  }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
      .subscribe(groups => this.groups = groups);
  }
}
