import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usersList = [];
  constructor(private userService : UserService) {

  }

  ngOnInit() {
    this.userService.getUsersList().subscribe(data=>this.usersList=data);
  }

}
