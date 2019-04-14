import { Component, OnInit } from '@angular/core';
import {CatService} from '../cat.service';
@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
catsList=[];
  constructor(private catService : CatService) { }

  ngOnInit() {
    this.catService.getAllCats().subscribe(data=>this.catsList=data);
  }

}
