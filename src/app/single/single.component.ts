import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  userData;
  userid;
  constructor(private userService : UserService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.userid  = this.route.snapshot.params["id"];
    this.userService.getSingleUser(this.userid).subscribe(data=>this.userData=data);

  }

}
