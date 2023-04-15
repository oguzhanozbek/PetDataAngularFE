import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {ActivatedRoute} from '@angular/router';
import {UserDataService} from "../user-data.service";

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  user?: User; // question marks here make it nullable
  constructor(
    private userDataService: UserDataService,
    private activatedRoute: ActivatedRoute) {
  }



  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id != null) {
        this.userDataService.getUser(id).subscribe(user => {
          this.user = user;
        });
      }
    });
  }
}
