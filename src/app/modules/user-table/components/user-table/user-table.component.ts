import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { CommonTableComponent } from 'src/app/modules/common-table/components/common-table/common-table.component';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent extends CommonTableComponent implements OnInit {

  public displayedColumns =  ['firstName', 'lastName', 'email', 'gender', 'jobTitle' ];

  constructor(private userService: UserService, public override liveAnnouncer: LiveAnnouncer) { 
    super(liveAnnouncer);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.userService.getUsers()
      .subscribe((dataUsers: User[]) => {
        this.initTable(dataUsers);
      });
  }
}
