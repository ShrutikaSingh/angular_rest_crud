import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  webapi_rest_url = "http://prabhat2019-001-site1.1tempurl.com/api/User/";
  constructor(private http : HttpClient) { }

  getUsersList() : Observable<User[]>{
    return this.http.get<User[]>(this.webapi_rest_url);
  }

  getSingleUser(id) : Observable<User>{
    return this.http.get<User>(this.webapi_rest_url+id);
  }
}
