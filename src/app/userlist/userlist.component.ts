import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserDataService} from "../user-data.service";


@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  public users: User[];
  constructor(private userDataService: UserDataService) {
    this.users=[];
  }

  ngOnInit(): void {
    this.userDataService.getUserList().subscribe(
      users => {
        console.log(users);
        this.users = users;
      }
    );
  }

}
