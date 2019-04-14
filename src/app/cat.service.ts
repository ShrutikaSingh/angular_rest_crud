
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import {enableProdMode} from '@angular/core'; //for enabling  production mode in angualr else it will display error
enableProdMode(); //enable production mode

interface Cat { //use instead of model
  name: string
}


@Injectable({
  providedIn: 'root'
})

export class CatService {
  web_api_url='http://localhost:8000/';
  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.web_api_url);
  }

  

}
  /*
  getSingleCat(name: string): Observable<Cat> {
    return this.http.get<Cat>(this.web_api_url + name)
  }

  addCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.web_api_url, cat)
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>(
      this.web_api_url + cat.name,
      cat
    )
  }

  deleteCat(name: string) {
    return this.http.delete(this.web_api_url + name)
  }
*/